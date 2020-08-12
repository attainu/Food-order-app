import React, { Component } from "react";
import { connect } from "react-redux";
import { setplace, getcity, getpage } from "../redux/actions/restuarantaction";
import Restuarantlist from "../pages/Restuarantlist";
import { v4 as uuidv4 } from "uuid";
import "../styles/rest.css";

class Restuarant extends Component {
  state = {
    place: "",
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
    this.props.getcity(this.state.place)
    this.props.setplace(this.state.place, 0);
    this.setState({ place: "" });
    this.props.getpage(0)
  };
  handlePage = () => {
    this.props.getpage(this.props.page+18)
  }
  handleprevPage = () => {
    this.props.getpage(this.props.page-18)
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
                this.props.page !== 72 ?
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

export default connect(mapStateToProps, { setplace,getcity,getpage })(Restuarant);
