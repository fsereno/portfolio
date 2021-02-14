"use strict;"

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const HOME = `/home`;
const ABOUT = `/about`;
const CONTACT = `/contact`;

function Content(props) {
  return(
    <Jumbotron fluid>
      <Container>
        <h1>{props.title}</h1>
        <p>
          {props.content}
        </p>
      </Container>
    </Jumbotron>
  )
}

function Home() {
  return(
    <Content title="Home" content="This is the home route" />
  )
}

function About() {
  return(
    <Content title="About" content="This this is the about route" />
  )
}

function Contact() {
  return(
    <Content title="Contact" content="This this is the contact route"/>
  )
}

function App() {
  return (
    <Router>
      <Navbar className="pb-2 px-2 pt-1" id="spaNavBar" bg="dark" variant="dark">
        <Nav className="mr-auto">
            <NavLink activeClassName="active" className="nav-link pb-1 pt-1 px-5" to={HOME}>Home</NavLink>
            <NavLink activeClassName="active" className="nav-link pb-1 pt-1 px-5" to={ABOUT}>About</NavLink>
            <NavLink activeClassName="active" className="nav-link pb-1 pt-1 px-5" to={CONTACT}>Contact</NavLink>
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