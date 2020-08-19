import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function ListItemLink({ to, name, ...rest }) {
  return (
    <Route
      path={to}
      children={({ match }) => (
        <li className={match ? "active" : ""}>
          <Link to={to} {...rest}>
            {name}
          </Link>
        </li>
      )}
    ></Route>
  );
}

export default class RouteChildrem extends Component {
  render() {
    return (
      <div>
        <h3>RouteChildrem</h3>
        <Router>
          <ul>
            <ListItemLink to="/somewhere" name="链接1" />
            <ListItemLink to="/somewhere-ele" name="链接2" />
          </ul>
        </Router>
      </div>
    );
  }
}
