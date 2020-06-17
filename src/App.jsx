import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LoginWithIc from "./pages/LoginWithIc";
// import Search from "./pages/Search";

import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./utils/Auth";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Route exact path="/" component={LandingPage} />
          <PrivateRoute path="/home" component={Home} />
          <Route exact path="/Login" component={LoginWithIc} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/loginemail" component={Login} />
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
