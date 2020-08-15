import React, { Component } from "react";
import food from "../Images/Img6.jpg";
import { Link } from "react-router-dom";
import "../styles/rest.css";

class Restuarantlist extends Component {
  render() {
    return (
      <div className="resl">
        <Link
          to={`/restuarant/${this.props.restuarant.restaurant.id}`}
          key={this.props.restuarant.restaurant.id}
        >
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
            <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
              Name:
              <span style={{ fontSize: "20px", fontWeight: "lighter" }}>
                {this.props.restuarant.restaurant.name}
              </span>
            </h2>
            <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
              Average Cost:
              <span style={{ fontSize: "20px", fontWeight: "lighter" }}>
                {this.props.restuarant.restaurant.currency +
                  this.props.restuarant.restaurant.average_cost_for_two}
              </span>
            </h2>
          </div>
        </Link>
      </div>
    );
  }
}

export default Restuarantlist;
