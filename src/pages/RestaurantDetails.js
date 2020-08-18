import React, { Component } from "react";
//import food from "../Images/Img6.jpg";
import "../styles/rest.css";
//import Restuarant from "../components/Restuarant";
import { connect } from "react-redux";
import {
  fetchRestaurant,
  fetchRestaurantDetails,
} from "../redux/actions/restaurantDetailsAction";

class RestaurantDetails extends Component {
  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.id);
    this.props.fetchRestaurantDetails(this.props.match.id);
  }
  render() {
    console.log(this.props.restuarant);
    return <div className="rest"></div>;
  }
}

const mapStateToProps = (storeState) => {
  return {
    currentHotel: storeState.restuarantDetailState.currentHotel,
    hotelDetails: storeState.restuarantDetailState.hotelDetails,
  };
};

export default connect(mapStateToProps, {
  fetchRestaurant,
  fetchRestaurantDetails,
})(RestaurantDetails);
