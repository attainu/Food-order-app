import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";

class Logout extends Component {
  render() {
    return (
      <div>
        <div className="">
          <NavBar />
          <Redirect to="/" />
        </div>
      </div>
    );
  }
}

export default Logout;
