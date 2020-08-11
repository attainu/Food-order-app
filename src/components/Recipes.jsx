import React, { Component } from "react";
import Food from "./Food";
import NavBar from "./NavBar";

class Recipes extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Food />
      </div>
    );
  }
}

export default Recipes;
