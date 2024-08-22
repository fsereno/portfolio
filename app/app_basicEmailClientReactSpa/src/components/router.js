"use strict;"

import React from 'react';
import { HashRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Home } from './pages/home';
import { Inbox } from './pages/inbox';
import { New } from './pages/new';
import { Outbox } from './pages/outbox';
import { HOME, INBOX, OUTBOX, NEW } from '../constants';

export const Router = () => {

    const getActive = (isActive) => isActive ? "active" : "none";

    return (
        <HashRouter>
            <Navbar className="pb-2 px-2 pt-3" id="spaNavBar" bg="dark" variant="dark">
                <Nav className="me-auto">
                    <NavLink className={({ isActive }) => getActive(isActive)} to={HOME}>Home</NavLink>
                    <NavLink id="inboxNavLink" className={({ isActive }) => getActive(isActive)} to={INBOX}>Inbox</NavLink>
                    <NavLink className={({ isActive }) => getActive(isActive)} to={OUTBOX}>Outbox</NavLink>
                    <NavLink className={({ isActive }) => getActive(isActive)} to={NEW}>New</NavLink>
                </Nav>
            </Navbar>
            <Routes>
                <Route exact path="/" element={<Navigate to={HOME}/>} />
                <Route path={HOME} element={<Home />}/>
                <Route path={INBOX} element={<Inbox />}/>
                <Route path={OUTBOX} element={<Outbox />}/>
                <Route path={NEW} element={<New />}/>
            </Routes>
        </HashRouter>
    )
}