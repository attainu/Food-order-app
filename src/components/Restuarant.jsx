import React, { Component } from "react";
import { connect } from "react-redux";
import { setplace, getcity, getpage } from "../redux/actions/restuarantaction";
import Restuarantlist from "../pages/Restuarantlist";
import { v4 as uuidv4 } from "uuid";
import "../styles/rest.css";

class Restuarant extends Component {
  state = {
    place: "",
    category: ""
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.page !== this.props.page) {
      this.props.setplace(this.props.town, this.props.page);
      console.log(prevProps.page, this.props.page)
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.place !== "") {
      this.props.getcity(this.state.place)
      this.props.setplace(this.state.place, 0, this.state.category);
      this.setState({ place: "" });
      this.props.getpage(0)
    }
  };
  handlePage = () => {
    this.props.getpage(this.props.page + 18)
  }
  handleprevPage = () => {
    this.props.getpage(this.props.page - 18)
  }
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
          <label>
            Pick your favorite flavor:
          <select value={this.state.value} name="category" onChange={this.handleChange}>
              <option value=""> </option>
              <option value="1">Delivery</option>
              <option value="2">Dine-out</option>
              <option value="3">Nightlife</option>
              <option value="4">Catching-up</option>
              <option value="5">Takeaway</option>
              <option value="6">Cafes</option>
              <option value="7">Daily Menus</option>
              <option value="8">Breakfast</option>
              <option value="9">Lunch</option>
              <option value="10">Dinner</option>
              <option value="11">Pubs&bars</option>
              <option value="13">Pocket Friendly Delivery</option>
              <option value="14">Clubs & Lounges</option>
            </select>
          </label>
          <input type="submit" value="search" id="button" />
        </form>
        <div >
          {" "}
          {this.props.hotel !== null ? (
            <><div className="res2">
              {this.props.hotel.restaurants.map((res) => (
                <Restuarantlist key={uuidv4()} restuarant={res} />
              ))}
            </div>
              <center>
                {
                  this.props.page !== 0 ?
                    <button onClick={this.handleprevPage} className="pb">Previous Page</button> : ""
                }
                {
                  this.props.page !== 72  ?
                    <button onClick={this.handlePage} className="pb">Next Page</button> : ""
                }
              </center>
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
    town: storeState.restuarantState.city,
    page: storeState.restuarantState.page
  };
};

export default connect(mapStateToProps, { setplace, getcity, getpage })(Restuarant);
