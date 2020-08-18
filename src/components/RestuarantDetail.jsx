import React, { Component } from "react";
import food from "../Images/Img6.jpg";
import { connect } from "react-redux";
import { fetchRestaurant, getreviews } from "../redux/actions/restaurantDetailsAction";
import "../styles/RestaurantDetails.css";
import NavBar from "./NavBar";
import Review from "./Review";
import { v4 as uuidv4 } from "uuid";


class RestuarantDetail extends Component {
  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.resid);
    this.props.getreviews(this.props.match.params.resid)
  }
  handleChange = () => {
    this.props.history.push("/home");
  };
  render() {
    return (
      <div>
        <NavBar />
        <i className="fa fa-arrow-circle-left" onClick={this.handleChange}></i>
        {this.props.rest !== null ? (
          <>
            <div
              style={{
                color: "white",
                width: "90%",
                margin: "5rem",
              }}
            >
              <div className="resheading">
                <h1
                  style={{
                    textAlign: "center",
                    fontSize: "45px",
                  }}
                >
                  <i>{this.props.rest.name}</i>
                </h1>
                <hr />
              </div>
              <div className="revbody">
                <div className="pic">
                  {this.props.rest.featured_image !== "" ? (
                    <img
                      src={this.props.rest.featured_image}
                      alt="no pic"
                      width="100%"
                      height="100%"
                    />
                  ) : (
                      <img src={food} alt="no pic" width="250px" height="250px" />
                    )}
                </div>
                <div
                  className="details"
                  style={{ fontSize: "25px", textAlign: "justify" }}
                >
                  <div className="dm"><b>Address : </b>
                    {this.props.rest.location.address}</div>
                  <div className="dm"> <b>Cuisines : </b>
                    {this.props.rest.cuisines}</div>
                  <div className="dm"><b>Cost for Two (approx) : </b>
                    {this.props.rest.currency}
                    {this.props.rest.average_cost_for_two}</div>
                  <div className="dm"><b>Timing : </b>
                    {this.props.rest.timings}
                  </div>
                  <div className="dm">
                    <b>Contact Details : </b>
                    {this.props.rest.phone_numbers}
                  </div>
                  <div className="dm">
                    <b>
                      Ratings :
                    </b>
                    {this.props.rest.user_rating.aggregate_rating}
                  </div>
                  <div className="dm">
                    <b>Reviews : </b>
                    {this.props.rest.all_reviews_count}
                  </div>
                </div>
              </div>
            </div>
            <div className="revs">
              <div style={{ color: "white" }}><p className="rh">REVIEWS</p></div>
              <div>
                {this.props.rev !== null ? this.props.rev.user_reviews.map(re => (<Review key={uuidv4()} rev={re} />)) : ""}
              </div>
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
    rev: storeState.restuarantDetailState.review,
    fav: storeState.restuarantDetailState.fav
  };
};

export default connect(mapStateToProps, { fetchRestaurant, getreviews })(RestuarantDetail);
