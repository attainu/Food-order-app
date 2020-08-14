import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Restaurant from "./Restuarant";

class Home extends Component {
  render() {
    return this.props.logdetails === null ? (
      // <Redirect to="/" />
      <div>
        <NavBar />
        <Restaurant />
      </div>
    ) : (
      <div>
        <NavBar />
        <Restaurant />
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
