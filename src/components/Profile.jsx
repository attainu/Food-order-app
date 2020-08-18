import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "../styles/Profile.css";
import NavBar from "./NavBar";

class Profile extends Component {
  state = {
    profileImg:
      "https://img.favpng.com/3/7/23/login-google-account-computer-icons-user-png-favpng-ZwgqcU6LVRjJucQ9udYpX00qa.jpg",
  };
  
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
        console.log(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  render() {
    const { profileImg } = this.state;
    return this.props.logdetails === null ? (
      <Redirect to="/" />
    ) : (
      <div>
        <NavBar />
        <div className="profile">
          <div className="page">
            <div className="container">
              <div className="img-holder">
                <img src={profileImg} alt="" id="img" className="img" />
              </div>
              <input
                type="file"
                accept="image/*"
                name="image-upload"
                id="input"
                onChange={this.imageHandler}
              />
              <div className="label">
                <label className="image-upload" htmlFor="input">
                  <i className="material-icons">add_photo_alternate</i>
                  Choose your Photo
                </label>
              </div>
            </div>
          </div>
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
