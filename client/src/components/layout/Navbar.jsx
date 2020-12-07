import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>Yelp 2.0</h1>
      <ul>
        <li>
          <Link to="#">Developers</Link>
        </li>
        <li>
          <Link to="#">Posts</Link>
        </li>
        <li>
          <Link to="#">
            <i className="fas fa-user" />{" "}
            <span className="hide-sm">Dashboard</span>
          </Link>
        </li>
        <li>
          {/* <a onClick={logout} href="#!"> */}
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
          {/* </a> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
