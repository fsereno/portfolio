"use strict;"

import React from 'react';
import { HashRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Home } from "./home";
import { About } from "./about";
import { Contact } from "./contact";

const HOME = "/home";
const ABOUT = "/about";
const CONTACT = "/contact";

export function Router() {
    return(
        <HashRouter>
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
        </HashRouter>
    )
}