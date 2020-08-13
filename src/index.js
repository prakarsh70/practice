import React from "react";
import ReactDOM from "react-dom";
import Employee from "./Employee.js";
import Timer from "./Timer";
import ErrorHandler from "./ErrorHandler";
import Calculator from "./Calculator";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
  <Router>
    <ErrorHandler>
      <React.Fragment>
        <Link to="/employee">Employee</Link> |<Link to="/timer"> Timer</Link> |
        <Link to="/calculator"> Calculator</Link>
        {/* <Link to="/contact"> Contact Us </Link> */}
        <Route exact path="/" component={Employee} />
        <Route path="/timer" component={Timer} />
        <Route path="/employee" component={Employee} />
        <Route path="/calculator" component={Calculator} />
        {/* <Route path = "/contact" component = {ContactUs} /> */}
      </React.Fragment>
    </ErrorHandler>
  </Router>,
  document.getElementById("container")
);
