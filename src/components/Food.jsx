import React, { Component } from "react";
import "../styles/food.css";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import Recipe from "../pages/Recipe";
import Alert from "../pages/Alert";
import { setfoods, getpage } from "../redux/actions/foodaction";

class Food extends Component {
  state = {
    query: "",
    alert: "",
  };
  componentDidMount(prevProps, prevState) {
    this.props.setfoods();
    if (prevProps.page !== this.props.page) {
      this.props.setfoods(this.props.page);
      console.log(prevProps.page, this.props.page);
    }
  }
  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.query !== "") {
      this.props.setfoods(this.state.query);
      this.props.getpage(0);
      console.log(this.props.items);
    } else {
      this.setState({ alert: "Please Enter Food Recipe" });
    }
  };
  handlePage = () => {
    this.props.getpage(this.props.page + 9);
  };
  handleprevPage = () => {
    this.props.getpage(this.props.page - 9);
  };
  render() {
    return (
      <div className="food">
        <h1 className="ft">Search Your Favourite Food Recipes</h1>
        <form onSubmit={this.handleSubmit} className="search-form">
          {this.state.alert !== "" && <Alert alert={this.state.alert} />}
          <input
            type="text"
            name="query"
            onChange={this.handleChange}
            value={this.state.query}
            autoComplete="off"
            placeholder="Search Food"
          />
          <input type="submit" value="Search" />
        </form>
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
          {" "}
          {this.props.items !== null ? (
            <>
              <center>
                <div className="resp1">
                  {this.props.items.map((recipe) => (
                    <Recipe key={uuidv4()} recipe={recipe} />
                  ))}
                </div>
              </center>
              <center>
                {this.props.page !== 0 ? (
                  <button onClick={this.handleprevPage} className="pg">
                    Previous Page
                  </button>
                ) : (
                  ""
                )}
                {this.props.page !== 24 &&
                this.props.items.results_shown >= 9 ? (
                  <button onClick={this.handlePage} className="pg">
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
    items: storeState.foodState.foods,
    isLoading: storeState.foodState.foodLoading,
    page: storeState.foodState.page,
  };
};

export default connect(mapStateToProps, { setfoods, getpage })(Food);
