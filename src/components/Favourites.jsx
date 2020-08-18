import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { fetchRestaurant } from "../redux/actions/restaurantDetailsAction";
import Favrest from "./Favrest";
import "../styles/rest.css";
import NavBar from "./NavBar";
class Favourites extends Component {

  render() {
    return this.props.logdetails === null ? (
      <Redirect to="/" />
    ) : (
      <div>
        {" "}
        <NavBar />
        <center>
          <div style={{ color: "white" }} className="res2">
            {this.props.favres && this.props.favres.length !== 0 ? (
              this.props.favres.map((fav) => (
                <div key={uuidv4()}>
                  <Favrest obj={fav} />
                </div>
              ))
            ) : (
              <h1>NO FAVOURITES ARE ADDED</h1>
            )}
          </div>
        </center>
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    logdetails: storeState.loginState.user,
    logstatus: storeState.loginState.status,
    prod: storeState.registerState.items,
    city: storeState.restuarantState.place,
    hotel: storeState.restuarantState.hotel,
    rest: storeState.restuarantDetailState.hotelDetails,
    rev: storeState.restuarantDetailState.review,
    fav: storeState.restuarantDetailState.fav,
    favres: storeState.restuarantDetailState.favres,
  };
};

export default connect(mapStateToProps, { fetchRestaurant })(Favourites);
