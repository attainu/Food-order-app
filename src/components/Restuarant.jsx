import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setplace,
  getcity,
  getpage,
  getcategory,
  getquery,
} from "../redux/actions/restuarantaction";
import Restuarantlist from "../pages/Restuarantlist";
import { v4 as uuidv4 } from "uuid";
import "../styles/rest.css";

class Restuarant extends Component {
  state = {
    place: "",
    category: "",
    query: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.page !== this.props.page) {
      this.props.setplace(
        this.props.town,
        this.props.page,
        this.props.cat,
        this.props.que
      );
      console.log(prevProps.page, this.props.page);
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  
      this.props.getcity(this.state.place);
      this.props.getcategory(this.state.category);
      this.props.getquery(this.state.query);
      this.props.setplace(
        this.state.place,
        0,
        this.state.category,
        this.state.query
      )
      this.props.getpage(0)
    
  
  };
  handlePage = () => {
    this.props.getpage(this.props.page + 9);
  };
  handleprevPage = () => {
    this.props.getpage(this.props.page - 9);
  };
  handleSelected = (e) => {
    this.setState({ cuisines: this.props.value });
  };
  render() {
    return (
      <div className="homebg">
        <p className="ft">Search Your Favourite Restaurant</p>
        <div className="header">
        
          <form onSubmit={this.handleSubmit}>
            <div className="form1-box">
           
              <input
                className="search-field skills"
                name="place"
                type="text"
                placeholder="Search for Restaurants in a City"
                value={this.state.place}
                onChange={this.handleChange}
                required
              />
              <input
                className="search-field location"
                type="text"
                name="query"
                value={this.state.query}
                onChange={this.handleChange}
                placeholder="Search by Cuisine or Street or Restuarant Name in the City"
              />
              <select
                value={this.state.value}
                name="category"
                onChange={this.handleChange}
                placeholder="Category"
                className="search-field cate"
                id="format"
              >
                <option value="" disabled>Choose a Category</option>
                <option value="">All</option>
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
              <button className="search-btn" type="submit">
                SEARCH
              </button>
            </div>
          </form>
        </div>
        <div>
          {" "}
          {this.props.hotel !== null ? (
            <>
              <center>
                <div className="res2">
                  {this.props.hotel.restaurants.map((res) => (
                    <Restuarantlist key={uuidv4()} restuarant={res} />
                  ))}
                </div>
              </center>
              <center>
                {this.props.page !== 0 ? (
                  <button onClick={this.handleprevPage} className="pb">
                    Previous Page
                  </button>
                ) : (
                    ""
                  )}
                {this.props.page !== 90 &&
                  this.props.hotel.results_shown >= 9 ? (
                    <button onClick={this.handlePage} className="pb">
                      Next Page
                    </button>
                  ) : (
                    ""
                  )}
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
    page: storeState.restuarantState.page,
    cat: storeState.restuarantState.category,
    que: storeState.restuarantState.query,
    fav: storeState.restuarantDetailState.fav
  };
};

export default connect(mapStateToProps, {
  setplace,
  getcity,
  getpage,
  getcategory,
  getquery,
})(Restuarant);
