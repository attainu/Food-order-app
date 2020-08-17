import React, { Component } from "react";
import Food from "./Food";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import FoodSliders from "./RecipeSlider";

class Recipes extends Component {
  render() {
    console.log(this.props.items);
    return (
      <div>
        <NavBar />
        <Food />
        {this.props.items === null ? <FoodSliders /> : ""}
        
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    items: storeState.foodState.foods,
    isLoading: storeState.foodState.foodLoading,
  };
};

export default connect(mapStateToProps)(Recipes);
