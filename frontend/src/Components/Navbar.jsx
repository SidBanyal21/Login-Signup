import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const deleteUser = () => {
    localStorage.clear("user");
    navigate("/signup");
  };
  return (
    <div className="navbar">
      <ul className="nav-ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/login">Login</Link>
        </li> */}
        {/* <li>
          {auth ? (
            <Link onClick={deleteUser} to="/signup">
              Logout
            </Link>
          ) : (
            <Link to="/signup">Signup</Link>
          )}
        </li> */}
        {auth ? (
          <li>
            {" "}
            <Link onClick={deleteUser} to="/signup">
              Logout
            </Link>
          </li>
        ) : (
          <>
            {" "}
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
