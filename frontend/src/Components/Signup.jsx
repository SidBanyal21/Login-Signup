import React from "react";
import { InputLabel, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import { SendIcon } from "@mui/icons-material/Send";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendData = async () => {
    console.log(name, password, email);
    let response = await fetch("http://localhost:5000/users", {
      method: "Post",
      body: JSON.stringify({ name, password, email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result = await response.json();
    console.log(result);
    setEmail("");
    setName("");
    setPassword("");
    if (result) {
      navigate("/");
    }
    localStorage.setItem("user", JSON.stringify(result));
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
        <InputLabel className="inputlabel"> Enter your full name</InputLabel>
        <TextField
          required
          id="outlined-required"
          label="Required"
          placeholder="enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <InputLabel className="inputlabel"> Enter your Email</InputLabel>
        <TextField
          required
          id="outlined-required"
          label="Required"
          placeholder="enter Email"
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
          onClick={sendData}
        >
          Register
        </Button>
      </div>
    </Box>
  );
};

export default Signup;
