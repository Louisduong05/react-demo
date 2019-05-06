import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <ul>
        <li>
          <Link to="/my-components">My components</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      </Fragment>
    );
  }
}

export default HomePage;