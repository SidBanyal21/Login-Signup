import React from "react";
import { Box } from "@mui/system";
import { TextField, InputLabel, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    console.log(email, password);
    const response = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result = await response.json();
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("user not found");
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "45ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="signup">
        <InputLabel className="inputlabel"> Enter your Email</InputLabel>
        <TextField
          required
          id="outlined-required"
          label="Required"
          placeholder="enter your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <InputLabel className="inputlabel"> Enter your password</InputLabel>
        <TextField
          id="outlined-password-input"
          label="Required"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="enter password"
          autoComplete="current-password"
        />

        <Button
          variant="contained"
          size="medium"
          color="success"
          style={{ width: "30%", marginLeft: "7rem" }}
          onClick={loginUser}
        >
          Login
        </Button>
      </div>
    </Box>
  );
};

export default Login;
