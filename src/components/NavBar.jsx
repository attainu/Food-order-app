import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="wrapper">
      <Link to="/home">Home</Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/logout">Logout</Link>
    </div>
  );
};

export default NavBar;
