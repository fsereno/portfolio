"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

const HOME = `/home`;
const ABOUT = `/about`;
const CONTACT = `/contact`;

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
              <Link to={HOME}>Home</Link>
            </li>
            <li>
              <Link to={ABOUT}>About</Link>
            </li>
            <li>
              <Link to={CONTACT}>Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Redirect to={HOME}></Redirect>
          </Route>
          <Route path={HOME}>
            <Home/>
          </Route>
          <Route path={ABOUT}>
            <About/>
          </Route>
          <Route path={CONTACT}>
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