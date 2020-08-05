import React from 'react';
import './App.css';
import Login from './components/Login';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/Home';
// import Flip from './components/flip';

function App() {
  return (
    <div className="App">
     <Switch>
     <Route exact path="/" component={Login}/>
     <Route exact path="/home" component={Home}/>
     <Redirect to="/"/>
     </Switch>
    </div>
  );
}

export default App;
