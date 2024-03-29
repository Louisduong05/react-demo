import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyComponentsPage from './pages/MyComponents'
import HomePage from './pages/Home'
import "./assets/styles/_css/application.css";

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" exact component={HomePage} />
      <Route path="/my-components" exact component={MyComponentsPage} />
    </div>
  </Router>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
