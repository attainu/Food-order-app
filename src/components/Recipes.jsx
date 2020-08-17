import React, { Component } from "react";
import Food from "./Food";
import NavBar from "./NavBar";
import RecipeSlider from "./RecipeSlider";

class Recipes extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Food />
        {this.props.items === null ? <RecipeSlider /> : ""}
      </div>
    );
  }
}

export default Recipes;
