import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link className="navbar-brand" to="/">Assignment 8</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/users">Users</Link>
        <Link className="nav-link" to="/todo">TODO</Link>
        <Link className="nav-link" to="/theme">Theme Switcher</Link>
        <Link className="nav-link" to="/password">Password Toggle</Link>
        <Link className="nav-link" to="/greeting">User Greeting</Link>
        <Link className="nav-link" to="/toggle">Toggle Message</Link>
        <Link className="nav-link" to="/person">Person</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;