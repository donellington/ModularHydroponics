import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/pages/Dashboard";
import Settings from './components/pages/Settings';
import SensorData from './components/pages/SensorData';
import Recipes from './components/pages/Recipes';
import Pods from './components/pages/Pods';
import AboutUs from './components/pages/AboutUs';

import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Switch>
              <PrivateRoute exact path="/Dashboard" component={Dashboard} />
              <PrivateRoute path='/Settings' exact component={Settings} />
              <PrivateRoute path='/SensorData' component={SensorData} />
              <PrivateRoute path='/Recipes' component={Recipes} />
              {/* <PrivateRoute path='/Pods' component={Pods} /> */}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
