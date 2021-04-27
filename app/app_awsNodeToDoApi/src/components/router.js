"use strict;"

import React from 'react';
import { HashRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LOGIN, MANAGE, LOGOUT, REGISTER } from '../constants';
import { Login } from './pages/login';
import { Manage } from './pages/manage';
import { LoginContext } from '../contexts';
import { Logout } from './pages/logout';
import { Register } from './pages/register';

export const Router = () => {

    const loginContext = React.useContext(LoginContext);

    return (
        <HashRouter>
            <Navbar className="pb-2 px-2 pt-3" id="spaNavBar" bg="dark" variant="dark">
                <Nav className="mr-auto">
                    {!loginContext.authenticated &&
                        <>
                            <NavLink activeClassName="active" className="nav-link pb-3 pt-1 px-3" to={LOGIN}>Login</NavLink>
                            <NavLink activeClassName="active" className="nav-link pb-3 pt-1 px-3" to={REGISTER}>Register</NavLink>
                        </>
                    }
                    {loginContext.authenticated &&
                        <>
                            <NavLink activeClassName="active" className="nav-link pb-3 pt-1 px-3" to={MANAGE}>Manage</NavLink>
                            <NavLink activeClassName="active" className="nav-link pb-3 pt-1 px-3" to={LOGOUT}>Logout</NavLink>
                        </>
                    }
                </Nav>
            </Navbar>
            <Switch>
                <Route exact path="/">
                    <Redirect to={LOGIN}></Redirect>
                </Route>
                <Route path={LOGIN}>
                    <Login />
                </Route>
                <Route path={REGISTER}>
                    <Register />
                </Route>
                <Route path={MANAGE}>
                    <Manage />
                </Route>
                <Route path={LOGOUT}>
                    <Logout />
                </Route>
            </Switch>
        </HashRouter>
    )
}