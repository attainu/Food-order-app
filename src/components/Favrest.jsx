import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchRestaurant,
  delfav,
  delid,
} from "../redux/actions/restaurantDetailsAction";
import food from "../Images/Img6.jpg";
import "../styles/rest.css";
import { withRouter } from "react-router";

class Favrest extends Component {

  handleRes = () => {
    this.props.history.push(`/restuarant/${this.props.obj.id}`);
  };
  handledel = () => {
    this.props.delfav(this.props.obj.id);
    this.props.delid(this.props.obj.id)
  };
  render() {
    return (
      <div className="resl">
        <div className="res">
          <div>
            {this.props.obj.img !== "" ? (
              <img
                src={this.props.obj.img}
                alt="no pic"
                width="250px"
                height="250px"
              />
            ) : (
              <img src={food} alt="no pic" width="250px" height="250px" />
            )}
          </div>
          <div className="cardtext">
            <h2
              style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              Name:
              <span style={{ fontSize: "20px", fontWeight: "lighter" }}>
                {this.props.obj.name}
              </span>
            </h2>
            <h2
              style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              Average Cost:
              <span style={{ fontSize: "20px", fontWeight: "lighter" }}>
                {this.props.obj.cost}
              </span>
            </h2>
          </div>
          <div>
            {" "}
            <button onClick={this.handleRes} className="resbtn">
              View Restuarant
            </button>
            <button onClick={this.handledel} className="resbtn">
              Delete from Fav
            </button>
          </div>
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

export default connect(mapStateToProps, { fetchRestaurant, delfav,delid })(
  withRouter(Favrest)
);
