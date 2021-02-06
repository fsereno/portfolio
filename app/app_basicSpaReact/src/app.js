"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home(props) {
  return(
    <div>
      <h2>Home</h2>
    </div>
  )
}

function About(props) {
  return(
    <div>
      <h2>About</h2>
    </div>
  )
}

function Contact(props) {
  return(
    <div>
      <h2>Contact</h2>
    </div>
  )
}

function App(props) {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/app_basicSpaReact/home">Home</Link>
            </li>
            <li>
              <Link to="/app_basicSpaReact/about">About</Link>
            </li>
            <li>
              <Link to="/app_basicSpaReact/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/app_basicSpaReact/home">
            <Home/>
          </Route>
          <Route path="/app_basicSpaReact/about">
            <About/>
          </Route>
          <Route path="/app_basicSpaReact/contact">
            <Contact/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('result')
);