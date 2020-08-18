import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { fetchRestaurant, getfavres, getfav } from "../redux/actions/restaurantDetailsAction";
import Favrest from "./Favrest";
import "../styles/rest.css";
import NavBar from "./NavBar";
class Favourites extends Component {
  componentDidMount() {
    if (this.props.logdetails !== null) {
      if (JSON.parse(window.localStorage.getItem(this.props.logdetails.customer.email)) !== null) {
        let favarray = JSON.parse(window.localStorage.getItem(this.props.logdetails.customer.email))
        for (let i = 0; i < favarray.length; i++) {
          var check = this.props.fav.includes(favarray[i].id)
          if (check === false) {
            this.props.getfav(favarray[i].id)
            this.props.getfavres(favarray[i].id, favarray[i].img, favarray[i].name, favarray[i].cost)
          }
        }
      }
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.logdetails !== null) {
      if (prevProps.favres !== this.props.favres) {
        console.log(this.props.favres)
        window.localStorage.setItem(this.props.logdetails.customer.email, JSON.stringify(this.props.favres));
      }
    }
  }
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

export default connect(mapStateToProps, { fetchRestaurant, getfavres, getfav })(Favourites);
