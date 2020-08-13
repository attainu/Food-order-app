import React, { Component } from "react";
import { connect } from "react-redux";
import { setplace, getcity, getpage, getcategory, getquery } from "../redux/actions/restuarantaction";
import Restuarantlist from "../pages/Restuarantlist";
import { v4 as uuidv4 } from "uuid";
import "../styles/rest.css";

class Restuarant extends Component {
  state = {
    place: "",
    category: "",
    query: ""
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.page !== this.props.page) {
      this.props.setplace(this.props.town, this.props.page,this.props.cat,this.props.que);
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
      this.props.getcategory(this.state.category)
      this.props.getquery(this.state.query)
      this.props.setplace(this.state.place, 0, this.state.category, this.state.query);
      this.props.getpage(0)
    }
  };
  handlePage = () => {
    this.props.getpage(this.props.page + 9)
  }
  handleprevPage = () => {
    this.props.getpage(this.props.page - 9)
  }
  handleSelected = (e) => {
    this.setState({ cuisines: this.props.value })
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
            multiple={true}
            required
          />


          <input type="submit" value="search" id="button" />
        </form>
        <div >
          {" "}
          {this.props.hotel !== null ? (
            <>
              {console.log(this.props.hotel.results_shown)}
              <center>
                <label>
                  <h1 style={{ color: "white" }}>Pick your favourite Category:</h1>
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
                <h1 style={{ color: "white" }}>Search in Your City</h1>
                <input
                  type="text"
                  name="query"
                  value={this.state.query}
                  onChange={this.handleChange}
                  placeholder="Search by Cuisine or Street or Restuarant Name"
                  id="search"
                  multiple={true}
                  required
                />
              </center>
              <div className="res2">
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
                  this.props.page !== 90 && this.props.hotel.results_shown >= 9 ?
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
    page: storeState.restuarantState.page,
    cat: storeState.restuarantState.category,
    que:storeState.restuarantState.query
  };
};

export default connect(mapStateToProps, { setplace, getcity, getpage, getcategory, getquery })(Restuarant);
