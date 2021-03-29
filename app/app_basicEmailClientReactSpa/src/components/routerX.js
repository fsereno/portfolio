"use strict;"

import React from 'react';
import { HashRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Home } from './home';
import { New } from './new';
import { Inbox } from './inbox';
import { Outbox } from './outbox';
import { Counter } from './counter';
import { getUnreadEmailCount } from '../utils/getUnreadEmailCount';
import { HOME, INBOX, OUTBOX, NEW_MESSAGE, NEW } from '../globalConstants';
import { GlobalContext } from '../globalContext';

export function Router() {

    const context = React.useContext(GlobalContext);

    const count = getUnreadEmailCount(context.messages, INBOX);

    return(
        <HashRouter>
            <Navbar className="pb-2 px-2 pt-3" id="spaNavBar" bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <NavLink activeClassName="active" className="nav-link pb-3 pt-1 px-3" to={HOME}>Home</NavLink>
                    <NavLink activeClassName="active" className="nav-link pb-3 pt-1 px-3" to={INBOX}>Inbox <Counter count={count}/></NavLink>
                    <NavLink activeClassName="active" className="nav-link pb-3 pt-1 px-3" to={OUTBOX}>Outbox</NavLink>
                    <NavLink activeClassName="active" className="d-none d-md-block nav-link pb-3 pt-1 px-3" to={NEW}>New</NavLink>
                    <Nav.Link id="new" className="nav-link pb-3 pt-1 px-3 d-md-none" onClick={() => context.dispatch({ type: NEW_MESSAGE, showModal: true })}>New</Nav.Link>
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
                <Route path={OUTBOX}>
                    <Outbox/>
                </Route>
                <Route path={NEW}>
                    <New/>
                </Route>
            </Switch>
        </HashRouter>
    )
}