"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link, NavLink, Redirect } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

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
      <Navbar className="pb-2" id="spaNavBar" bg="dark" variant="dark">
        <Nav className="mr-auto">
            <NavLink activeClassName="is-active" className="nav-link" to={HOME}>Home</NavLink>
            <NavLink activeClassName="is-active" className="nav-link" to={ABOUT}>About</NavLink>
            <NavLink activeClassName="is-active" className="nav-link" to={CONTACT}>Contact</NavLink>
        </Nav>
      </Navbar>
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
    </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('result')
);