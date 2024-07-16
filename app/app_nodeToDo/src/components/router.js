"use strict;"

import React from 'react';
import { HashRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
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
            <Routes>
                <Route exact path="/" element={<Navigate to={LOGIN}/>} />
                <Route path={LOGIN} element={loginContext.authenticated ? <Navigate to={LOGIN}/> : <Login />} />
                <Route path={REGISTER} element={<Register />} />
                <Route path={MANAGE} element={<ProtectedRoute Component={Manage}/>} />
                <Route path={EDIT} element={<ProtectedRoute Component={Edit}/>} />
                <Route path={LOGOUT} element={<ProtectedRoute Component={Logout} />} />
            </Routes>
        </HashRouter>
    );
}