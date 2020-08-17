import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Recipes from "./components/Recipes";
import Logout from "./components/Logout";
import RestuarantDetail from "./components/RestuarantDetail";
import Favourites from "./components/Favourites";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/fav" component={Favourites} />
        <Route exact path="/restuarant/:resid" component={RestuarantDetail} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
