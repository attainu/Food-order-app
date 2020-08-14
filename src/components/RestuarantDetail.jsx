import React, { Component } from "react";
import food from "../Images/Img6.jpg";
import { connect } from "react-redux";
import { fetchRestaurant } from "../redux/actions/restaurantDetailsAction";


class RestuarantDetail extends Component {
  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.resid);
  }
  handleChange=()=>{
    this.props.history.push("/home")
  }
  render() {
    return (
      <div>
        <button onClick={this.handleChange}>Back</button>
        {this.props.rest !== null ? (
          <>
            <div
              style={{
                color: "white",
                width: "85%",
                textAlign: "center",
                margin: "10rem",
              }}
            >
              <h1>
                <u>{this.props.rest.name}</u>
              </h1>
              <hr />
              <br />
              <br />
              <div className="details" style={{ fontSize: "25px" }}>
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
                <br /> <br />
              </div>
              <div className="pic" style={{}}>
                {this.props.rest.featured_image !== "" ? (
                  <img
                    src={this.props.rest.featured_image}
                    alt="no pic"
                    width="500px"
                    height="400px"
                  />
                ) : (
                  <img src={food} alt="no pic" width="250px" height="250px" />
                )}
              </div>
              <br />
              <br />
              <br />
              <br />
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
