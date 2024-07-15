"use strict;"

import React from 'react';
import { HashRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LOGIN, MANAGE, LOGOUT, REGISTER, EDIT } from '../constants';
import { Login } from './pages/login';
import { Manage } from './pages/manage';
import { LoginContext } from '../contexts';
import { Logout } from './pages/logout';
import { Register } from './pages/register';
import { Edit } from './pages/edit';
import { ProtectedRoute } from './protectedRoute';

export const Router = () => {

    const loginContext = React.useContext(LoginContext);

    return (
        <HashRouter>
            <Navbar className="pb-2 px-2 pt-3" id="spaNavBar" bg="dark" variant="dark">
                <Nav className="me-auto">
                    {!loginContext.authenticated &&
                        <>
                            <NavLink activeClassName="active" className="nav-link pb-3 pt-1 px-3" to={LOGIN}>Login</NavLink>
                            <NavLink activeClassName="active" className="nav-link pb-3 pt-1 px-3" to={REGISTER}>Create a user</NavLink>
                        </>
                    }
                    {loginContext.authenticated &&
                        <>
                            <NavLink activeClassName="active" className="nav-link pb-3 pt-1 px-3" to={MANAGE}>Manage</NavLink>
                            <NavLink id="logoutNavLink" activeClassName="active" className="nav-link pb-3 pt-1 px-3" to={LOGOUT}>Logout</NavLink>
                        </>
                    }
                </Nav>
            </Navbar>
            <Switch>
                <Route exact path="/">
                    <Redirect to={LOGIN}></Redirect>
                </Route>
                <Route path={LOGIN}>
                    {loginContext.authenticated ? <Redirect to={MANAGE} /> : <Login />}
                </Route>
                <Route path={REGISTER}>
                    <Register />
                </Route>
                <Route path={MANAGE}>
                    <ProtectedRoute Component={Manage}/>
                </Route>
                <Route path={EDIT}>
                    <ProtectedRoute Component={Edit}/>
                </Route>
                <Route path={LOGOUT}>
                    <ProtectedRoute Component={Logout} />
                </Route>
            </Switch>
        </HashRouter>
    );
}