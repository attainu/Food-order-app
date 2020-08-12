import React, { Component } from "react";
import { connect } from "react-redux";
import { setplace } from "../redux/actions/restuarantaction";
import Restuarantlist from "../pages/Restuarantlist";
import { v4 as uuidv4 } from "uuid";
import "../styles/rest.css";

class Restuarant extends Component {
  state = {
    place: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setplace(this.state.place);
    this.setState({ place: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="place"
            value={this.state.place}
            onChange={this.handleChange}
            placeholder="Search for Restaurants"
            id="search"
          />
          <input type="submit" value="search" id="button" />
        </form>
        <div className="res2">
          {" "}
          {this.props.hotel !== null ? (
            <>
              {this.props.hotel.restaurants.map((res) => (
                <Restuarantlist key={uuidv4()} restuarant={res} />
              ))}
            </>
          ) : (
            ""
          )}
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
  };
};

export default connect(mapStateToProps, { setplace })(Restuarant);
