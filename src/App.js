import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import Recipes from "./components/Recipes";
import Logout from "./components/Logout";
import Restuarant from "./components/Restuarant";
//import Flip from './components/flip';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/res" component={Restuarant}/>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
