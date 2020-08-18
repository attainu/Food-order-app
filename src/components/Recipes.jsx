import React, { Component } from "react";
import Food from "./Food";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import FoodSliders from "./RecipeSlider";
import { Redirect } from "react-router-dom";
class Recipes extends Component {
  render() {
    console.log(this.props.items);
    return this.props.logdetails === null ? (
      <Redirect to="/" />
    ) : (
      <div>
        <NavBar />
        <Food />
        <div className="mediashow">
        {this.props.items === null ? <FoodSliders /> : ""}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    logdetails: storeState.loginState.user,
    logstatus: storeState.loginState.status,
    items: storeState.foodState.foods,
    isLoading: storeState.foodState.foodLoading,
  };
};

export default connect(mapStateToProps)(Recipes);
