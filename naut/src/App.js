import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.scss";
import Home from "./Home";
import Squadify from "./Squadify";

function App(props) {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/squadify" component={Squadify} />
    </Router>
  );
}

export default App;
