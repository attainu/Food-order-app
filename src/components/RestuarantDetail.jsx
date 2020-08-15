import React, { Component } from "react";
import food from "../Images/Img6.jpg";
import { connect } from "react-redux";
import { fetchRestaurant } from "../redux/actions/restaurantDetailsAction";
import "../styles/RestaurantDetails.css";
import NavBar from "./NavBar";

class RestuarantDetail extends Component {
  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.resid);
  }
  handleChange = () => {
    this.props.history.push("/home");
  };
  render() {
    return (
      <div>
        <NavBar />
        <i class="fa fa-arrow-circle-left" onClick={this.handleChange}></i>
        {this.props.rest !== null ? (
          <>
            <div
              style={{
                color: "white",
                width: "90%",
                margin: "5rem",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "45px",
                }}
              >
                <i>{this.props.rest.name}</i>
              </h1>
              <hr />
              <br />
              <br />
              <div
                className="details"
                style={{ fontSize: "25px", textAlign: "justify" }}
              >
                <b>Address:</b>
                {this.props.rest.location.address}
                <br /> <br />
                <b>Cuisines:</b>
                {this.props.rest.cuisines}
                <br /> <br />
                <b>Cost for Two (approx):</b>
                {this.props.rest.currency}
                {this.props.rest.average_cost_for_two}
                <br /> <br />
                <b>Timing:</b>
                {this.props.rest.timings}
                <br />
                <br />
                <b>Contact Details:</b>
                {this.props.rest.phone_numbers}
                <br />
                <br />
                <b>
                  Ratings:
                  <span style={{ fontSize: "25px" }}>
                    {this.props.rest.user_rating.aggregate_rating}
                  </span>
                </b>
                <br /> <br />
                <b>Reviews:</b>
                {this.props.rest.all_reviews_count}
                <br /> <br /> <br />
                <br />
              </div>
              <div className="pic" style={{}}>
                {this.props.rest.featured_image !== "" ? (
                  <img
                    src={this.props.rest.featured_image}
                    alt="no pic"
                    width="500px"
                    height="450px"
                  />
                ) : (
                  <img src={food} alt="no pic" width="250px" height="250px" />
                )}
              </div>
              <br />
              <br />
            </div>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
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
  };
};

export default connect(mapStateToProps, { fetchRestaurant })(RestuarantDetail);
