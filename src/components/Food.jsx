import React, { Component } from 'react';
import "../styles/food.css";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux"
import Recipe from "../pages/Recipe"
import Alert from '../pages/Alert';
import { setfoods } from '../redux/actions/foodaction';

class Food extends Component {

  state = {
    query: "",
    alert: ""
  }
  componentDidMount(){
    this.props.setfoods()
  }
  handleChange = (e) => {
    this.setState({ query: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.query !== "") {
      this.props.setfoods(this.state.query)
      console.log(this.props.items)
    }
    else {
      this.setState({ alert: "Please Enter Food Recipe" })
    }
  }
  render() {
    return (
      <div className="food">
        <h1 className="ft">Search your favourite food</h1>
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
          {this.props.items !== null ?
            this.props.items.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />) : <h1>Loading</h1>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = storeState => {
  return {
    items: storeState.foodState.foods,
    isLoading: storeState.foodState.foodLoading
  }
}

export default connect(mapStateToProps, {setfoods})(Food);
