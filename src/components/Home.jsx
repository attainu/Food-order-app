import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Categories from "./Categories";

class Home extends Component {
  render() {
    return this.props.logdetails === null ? (
      <Redirect to="/" />
    ) : (
      <div>
        <NavBar />
        <Categories />
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    logdetails: storeState.loginState.user,
    logstatus: storeState.loginState.status,
    prod: storeState.registerState.items,
  };
};

export default connect(mapStateToProps)(Home);
