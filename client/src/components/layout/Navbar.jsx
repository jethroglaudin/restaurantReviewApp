import React from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const logout = (e) => {
    console.log("logging out");
    // push to login page
    // useHistory()
  };
  return (
    <nav className="navbar bg-light">
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#">
            <span className="hide-sm">About</span>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <span className="hide-sm">Sign In</span>
          </Link>
        </li>
        <li>
          <Link to="/register">
            <span className="hide-sm">Signup</span>
          </Link>
        </li>
        <li>
          <a onClick={logout} href="#!">
            {/* <i className="fas fa-sign-out-alt"></i>{" "} */}
            <span className="hide-sm">Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
