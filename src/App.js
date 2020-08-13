import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Recipes from "./components/Recipes";
import Logout from "./components/Logout";

import RestuarantDetail from "./components/RestuarantDetail";
import Flip from "./components/flip";
//import Restuarant from "./components/Restuarant";
//import Flip from './components/flip';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/restuarant/:resid" component={RestuarantDetail} />
        <Route exact path="/d" component={Flip} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
