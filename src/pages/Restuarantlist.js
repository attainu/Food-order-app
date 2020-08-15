import React, { Component } from "react";
import food from "../Images/Img6.jpg";
import { withRouter } from "react-router";
import "../styles/rest.css";

class Restuarantlist extends Component {
  handleRes=()=>{
    this.props.history.push(`/restuarant/${this.props.restuarant.restaurant.id}`)
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
            <h2 style={{ fontSize: "20px", fontWeight: "bold",color:"white"}}>
              Name:
              <span style={{ fontSize: "20px", fontWeight: "lighter" }}>
                {this.props.restuarant.restaurant.name}
              </span>
            </h2>
            <h2 style={{ fontSize: "20px", fontWeight: "bold" ,color:"white"}}>
              Average Cost:
              <span style={{ fontSize: "20px", fontWeight: "lighter" }}>
                {this.props.restuarant.restaurant.currency +
                  this.props.restuarant.restaurant.average_cost_for_two}
              </span>
            </h2>
            </div>
            <button onClick={this.handleRes} className="resbtn">View Restuarant</button>
          </div>
      </div>
    );
  }
}

export default withRouter(Restuarantlist);
