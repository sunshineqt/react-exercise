import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// 方便的内联渲染
ReactDOM.render(
  <Router>
    <Route path="/home" render={() => <div>Home</div>} />
    ,node
  </Router>
);
