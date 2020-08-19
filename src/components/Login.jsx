import React, { Component } from "react";
import "../styles/login.css";
import { setuser, setguser } from "../redux/actions/loginaction";
import { connect } from "react-redux";
import { setitems } from "../redux/actions/registeraction";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import config from "../config";

class Login extends Component {
  state = {
    lemail: "",
    lpassword: "",
    rname: "",
    remail: "",
    rpassword: "",
    rcpassword: "",
    pcheck: true,
    echeck: true,
    fcheck: true,
    isChecked: false,
  };
  componentDidMount() {
    const rememberMe = localStorage.getItem('rememberMe')
    if(rememberMe!==null){
      const checkr = rememberMe==="true"
    let userp = checkr ? localStorage.getItem('luser') : '';
    if(userp!=="")
    {
      userp = JSON.parse(userp)
      console.log(userp.lemail,userp.lpassword)
      this.setState({lemail:userp.lemail})
      this.setState({lpassword:userp.lpassword})
    }
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.logdetails !== this.props.logdetails) {
      if (this.props.logstatus === 200)
        this.props.history.push("/home")
      console.log(prevProps.logdetails, this.props.logdetails)
    }
  }
  login = () => {
    let x = document.getElementById("login");
    let y = document.getElementById("register");
    let z = document.getElementById("btn");
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
  };
  register = () => {
    let x = document.getElementById("login");
    let y = document.getElementById("register");
    let z = document.getElementById("btn");
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
  };
  handlelvalue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handlervalue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handlelsubmit = (e) => {
    e.preventDefault();
    this.props.setuser(this.state.lemail, this.state.lpassword);
    const luser = { lemail: this.state.lemail, lpassword: this.state.lpassword }
    localStorage.setItem('rememberMe', this.state.isChecked);
    localStorage.setItem('luser', this.state.isChecked ? JSON.stringify(luser) : '');
    this.setState({ lemail: "", lpassword: "" });
  };
  handlersubmit = (e) => {
    let a = 0;
    e.preventDefault();
    if (
      this.state.rpassword === "" ||
      this.state.rcpassword === "" ||
      this.state.remail === "" ||
      this.state.rname === ""
    ) {
      this.setState({ fcheck: false });
    } else {
      a++;
    }
    if (this.state.rpassword !== this.state.rcpassword) {
      this.setState({ pcheck: false });
    } else {
      this.setState({ pcheck: true });
      a++;
    }
    var validator = require("email-validator");
    let bol = validator.validate(this.state.remail);
    if (bol === true) a++;
    this.setState({ echeck: bol });
    // eslint-disable-next-line
    if (a == 3) {
      this.props.setitems(
        this.state.rname,
        this.state.remail,
        this.state.rpassword
      );
    }
  };

  responseGoogle = (response) => {
    console.log(response);
    this.props.setguser(
      response.profileObj.givenName,
      response.profileObj.email
    );
    this.props.history.push("/home");
  };
  responseGoogle1 = (response) => {
    console.log(response);
  };

  responseFacebook = (response) => {
    console.log(response);
    this.props.setguser(response.name);
    this.props.history.push("/home");
  };
  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  render() {
    console.log(this.state.isChecked)
    return (
      <div>
        <div className="hero">
          <center>
            <div className="headingbar">
              <center>
                <p className="headingtext">
                  Tomato
                </p>
              </center>
            </div>
          </center>
          <div className="form-box">
            <div className="button-box">
              <div id="btn"></div>
              <button type="button" className="toggle-btn" onClick={this.login}>
                Log In
              </button>
              <button
                type="button"
                className="toggle-btn"
                onClick={this.register}
              >
                Register
              </button>
            </div>
            <form
              className="input-group"
              id="login"
              onSubmit={this.handlelsubmit}
            >
              <center>
                <GoogleLogin
                  clientId={config.CLIENT_ID}
                  buttonText="LOGIN WITH GOOGLE"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle1}
                  cookiePolicy={"single_host_origin"}
                  className="socbtn"
                />
              </center>
              <center>
                <FacebookLogin
                  appId="2578350775811725"
                  fields="name,email,picture"
                  callback={this.responseFacebook}
                  icon="fa-facebook-official"
                  className="socbtn1"
                />
              </center>
              {this.props.logdetails != null ? (
                <div>
                  {this.props.logstatus === 200 ? (
                    <>
                      {" "}
                      <h4 style={{ color: "green" }} >
                        Succesfully Logined
                      </h4>
                    </>
                  ) : (
                      <h4 style={{ color: "red" }}>Sorry Wrong Details</h4>
                    )}
                </div>
              ) : (
                  ""
                )}
              <input
                type="email"
                className="input-field"
                placeholder="Enter Email"
                name="lemail"
                onChange={this.handlelvalue}
                required
                value={this.state.lemail}
              />
              <input
                type="password"
                className="input-field"
                placeholder="Enter Password"
                name="lpassword"
                onChange={this.handlelvalue}
                required
                value={this.state.lpassword}
              />
              <input type="checkbox" className="check-box" checked={this.state.isChecked}
                onChange={this.toggleChange} />
              <span className="cbh">Remember Me</span>
              <button type="submit" className="submit-btn1">
                Login
              </button>
            </form>
            <form
              className="input-group"
              id="register"
              onSubmit={this.handlersubmit}
            >
              {this.state.fcheck ? (
                ""
              ) : (
                  <span className="cbd" style={{ color: "red" }}>
                    Please Enter all fields to register
                  </span>
                )}
              {this.props.prod !== null ? (
                this.props.prod.status === 200 ? (
                  <div>
                    {" "}
                    <h4 style={{ color: "green" }}>Succesfully Registered</h4>
                  </div>
                ) : (
                    <div>
                      <h4 style={{ color: "red" }}>
                        You may entered exsiting email please check and type again
                    </h4>
                    </div>
                  )
              ) : (
                  ""
                )}
              <input
                type="text"
                className="input-field"
                placeholder="Enter Username"
                name="rname"
                onChange={this.handlervalue}
                required
                value={this.state.rname}
              />

              {this.state.echeck ? (
                ""
              ) : (
                  <span className="cbd" style={{ color: "red" }}>
                    Please Enter Correct Email
                  </span>
                )}
              <input
                type="email"
                className="input-field"
                placeholder="Enter the Mail"
                name="remail"
                onChange={this.handlervalue}
                required
                value={this.state.remail}
              />
              <input
                type="password"
                className="input-field"
                placeholder="Enter Password"
                name="rpassword"
                onChange={this.handlervalue}
                required
                value={this.state.rpassword}
              />
              {this.state.pcheck ? (
                ""
              ) : (
                  <span className="cbd" style={{ color: "red" }}>
                    Password is Not Matching
                  </span>
                )}
              <input
                type="password"
                className="input-field"
                placeholder="Confirm Password "
                name="rcpassword"
                onChange={this.handlervalue}
                required
                value={this.state.rcpassword}
              />
              <input type="checkbox" className="check-box" required />
              <span className="cb">I agree to the terms & condition</span>
              <button type="submit" className="submit-btn">
                Register
              </button>
            </form>
          </div>
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

export default connect(mapStateToProps, { setuser, setitems, setguser })(Login);
