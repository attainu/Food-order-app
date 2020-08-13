import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { setguser, setuser } from "../redux/actions/loginaction";
class Logout extends Component {

  componentDidMount(){
    this.props.setguser(null,null)
    this.props.setuser(null,null)
  }

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

const mapStateToProps = (storeState) => {
  return {
    logdetails: storeState.loginState.user,
    logstatus: storeState.loginState.status,
    prod: storeState.registerState.items,
  };
};



export default connect(mapStateToProps,{setguser,setuser})(Logout);
