import React, { Component } from "react";
import food from "../Images/Img6.jpg";
import { withRouter } from "react-router";
import "../styles/rest.css";
import { connect } from "react-redux";
import { getfav, getfavres } from "../redux/actions/restaurantDetailsAction";

class Restuarantlist extends Component {
  handleRes = () => {
    this.props.history.push(`/restuarant/${this.props.restuarant.restaurant.id}`)
  }

  handleFav = () => {
    var check = this.props.fav.includes(this.props.restuarant.restaurant.id)
    if (check === false) {
      this.props.getfav(this.props.restuarant.restaurant.id)
      this.props.getfavres(this.props.restuarant.restaurant.id, this.props.restuarant.restaurant.featured_image, this.props.restuarant.restaurant.name, this.props.restuarant.restaurant.currency +
        this.props.restuarant.restaurant.average_cost_for_two)
    }
    window.localStorage.setItem(this.props.logdetails.customer.email, JSON.stringify(this.props.favres));
  }
  render() {
    return (
      <div className="resl">

        <div className="res">
          <div>
            {this.props.restuarant.restaurant.featured_image !== "" ? (
              <img
                src={this.props.restuarant.restaurant.featured_image}
                alt="no pic"
                width="250px"
                height="250px"
              />
            ) : (
                <img src={food} alt="no pic" width="250px" height="250px" />
              )}
          </div>
          <div className="cardtext">
            <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}>
              Name:
              <span style={{ fontSize: "20px", fontWeight: "lighter" }}>
                {this.props.restuarant.restaurant.name}
              </span>
            </h2>
            <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}>
              Average Cost:
              <span style={{ fontSize: "20px", fontWeight: "lighter" }}>
                {this.props.restuarant.restaurant.currency +
                  this.props.restuarant.restaurant.average_cost_for_two}
              </span>
            </h2>
          </div>
          <div>  <button onClick={this.handleRes} className="resbtn">View Restuarant</button>
            <button onClick={this.handleFav} className="resbtn">Add to Favourites</button></div>

        </div>
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



export default connect(mapStateToProps, { getfav, getfavres })(withRouter(Restuarantlist))
