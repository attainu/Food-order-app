import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <><div className="navstyle">
      <p className="headingtext">
        Tomato
      </p>
      <div className="wrapper">
        <Link to="/home">Resturants</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/fav">Favourites</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </div>
    </>
  );

};

export default NavBar;
