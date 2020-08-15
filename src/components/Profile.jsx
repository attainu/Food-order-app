import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "../styles/Profile.css";
import NavBar from "./NavBar";

class Profile extends Component {
  render() {
    return this.props.logdetails === null ? (
      <Redirect to="/" />
    ) : (
      <div>
        <NavBar />
        <div className="profile">
          <img
            src="https://img.favpng.com/3/7/23/login-google-account-computer-icons-user-png-favpng-ZwgqcU6LVRjJucQ9udYpX00qa.jpg"
            alt="Profile pic"
            style={{ width: 300, height: 300, borderRadius: "50%" }}
          />
          <h1>{this.props.logdetails.customer.name}</h1>
          <p>{this.props.logdetails.customer.email}</p>
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
  };
};

export default connect(mapStateToProps)(Profile);
