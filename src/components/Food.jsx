import React, { Component } from "react";
import "../styles/food.css";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import Recipe from "../pages/Recipe";
import Alert from "../pages/Alert";
import { setfoods } from "../redux/actions/foodaction";
import "../styles/rest.css";

class Food extends Component {
  state = {
    query: "",
    alert: "",
    start: 0,
    end: 9
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.start !== this.state.start) {
      this.props.setfoods(this.state.query, this.state.start, this.state.end)
      console.log(prevState.start, this.state.start, this.state.end);
    }
  }
  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.query !== "") {
      this.props.setfoods(this.state.query);
      console.log(this.props.items);
    } else {
      this.setState({ alert: "Please Enter Food Recipe" });
    }
  };
  handleNext = () => {
    this.setState({ start: this.state.start + 9 })
    this.setState({ end: this.state.end + 9 })
  }
  handlePrev = () => {
    this.setState({ start: this.state.start - 9 })
    this.setState({ end: this.state.end - 9 })
  }
  render() {
    return (
      <div className="food">
        <p className="ft">Search Your Favourite Food Recipes</p>
        <div className="header">
          <form onSubmit={this.handleSubmit} className="search-form">
            {this.state.alert !== "" && <Alert alert={this.state.alert} />}
            <div className="form1-box">
              <input
                type="text"
                name="query"
                onChange={this.handleChange}
                value={this.state.query}
                autoComplete="off"
                placeholder="Search Food"
                className="search-field skills"
              />
              <input type="submit" value="Search" className="search-btn"/>
            </div>
          </form>
        </div>
        <div className="recipes">
          {this.props.items !== null ? (
            this.props.items.map((recipe) => (
              <Recipe key={uuidv4()} recipe={recipe} />
            ))
          ) : (
              <h1>Loading</h1>
            )}
        </div>
        <div>
          {this.props.items !== null ? <>
            {this.state.start !== 0 ? <button onClick={this.handlePrev} className="pb">Prev Page</button> : ""}
            {this.state.end <= 18 && this.props.items.length >= 9 ? <button onClick={this.handleNext} className="pb">Next Page</button> : ""}
          </> : ""
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    items: storeState.foodState.foods,
    isLoading: storeState.foodState.foodLoading,
  };
};

export default connect(mapStateToProps, { setfoods })(Food);

