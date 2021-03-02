"use strict;"

import React from 'react';
import { HashRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Home } from './home';
import { Inbox } from './inbox';
import { Counter } from './counter';
import { HOME, INBOX } from '../globalConstants';

export function Router() {
    return(
        <HashRouter>
            <Navbar className="pb-2 px-2 pt-1" id="spaNavBar" bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <NavLink activeClassName="active" className="nav-link pb-1 pt-1 px-3" to={HOME}>Home</NavLink>
                    <NavLink activeClassName="active" className="nav-link pb-1 pt-1 px-3" to={INBOX}>Inbox <Counter/></NavLink>
                </Nav>
            </Navbar>
            <Switch>
                <Route exact path="/">
                    <Redirect to={HOME}></Redirect>
                </Route>
                <Route path={HOME}>
                    <Home/>
                </Route>
                <Route path={INBOX}>
                    <Inbox/>
                </Route>
            </Switch>
        </HashRouter>
    )
}