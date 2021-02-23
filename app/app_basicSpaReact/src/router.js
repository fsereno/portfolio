"use strict;"

import React from 'react';
import { HashRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Home } from "./routes/home";
import { About } from "./routes/about";
import { Inbox } from "./routes/inbox";
import { Request } from "./routes/request";

const HOME = "/home";
const ABOUT = "/about";
const REQUEST = "/request";
const INBOX = "/inbox";

export function Router() {
    return(
        <HashRouter>
            <Navbar className="pb-2 px-2 pt-1" id="spaNavBar" bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <NavLink activeClassName="active" className="nav-link pb-1 pt-1 px-5" to={HOME}>Home</NavLink>
                    <NavLink activeClassName="active" className="nav-link pb-1 pt-1 px-5" to={ABOUT}>About</NavLink>
                    <NavLink activeClassName="active" className="nav-link pb-1 pt-1 px-5" to={INBOX}>Inbox</NavLink>
                    <NavLink activeClassName="active" className="nav-link pb-1 pt-1 px-5" to={REQUEST}>Request</NavLink>
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
                <Route path={INBOX}>
                    <Inbox/>
                </Route>
                <Route path={REQUEST}>
                    <Request/>
                </Route>
            </Switch>
        </HashRouter>
    )
}