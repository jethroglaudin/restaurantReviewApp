import React, { Fragment, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = (e) => {
    console.log("logging out");
    logout();
    // push to login page
    // useHistory()
  };

  const authLinks = (
    <>
    <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">
            <span className="hide-sm">About</span>
          </Link>
        </li>
      <li>Welcome, {user && user.name} </li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt" />
          <span className="hide-sim">Logout</span>
        </a>
      </li>
    </>
  );

  const guestLinks = (
    <>
    <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">
            <span className="hide-sm">About</span>
          </Link>
        </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );
  return (
    <nav className="navbar bg-light">
      <ul style={{ listStyle: "none" }}>
      {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </nav>
  );
};

export default Navbar;
