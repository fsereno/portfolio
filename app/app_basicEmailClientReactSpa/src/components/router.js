"use strict;"

import React, { useLayoutEffect, useReducer, useMemo, useEffect, useState } from 'react';
import { HashRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import { Reducer } from '../reducers/reducer';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Home } from './home';
import { Inbox } from './inbox';
import { New } from './new';
import { Outbox } from './outbox';
import { HOME, INBOX, OUTBOX, NEW_MESSAGE, NEW, DESELECT_THREAD, MY_ADDRESS } from '../globalConstants';
import { GlobalContext } from '../globalContext';
import { ToasterContextProvider } from './toasterContextProvider';
import { Toaster } from '../../../js/modules/react/toaster';

function createMessages(messages) {
    const limit = 1000;
    const result = [...messages];

    for (let i = 0; i < limit; i++) {
        result.push(
            {
                id: Math.random(),
                from: "some@email.co.uk",
                to: MY_ADDRESS,
                subject: `Subject ${i}`,
                thread: `some@email.co.uk_${MY_ADDRESS}_Subject ${i}`,
                body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                age: 1,
                read: false,
                dir: INBOX,
                time: new Date().getTime()
            },
        )
    }

    return result;
}
export function Router() {

    let messages = [
        {
            id: 0,
            from: "james@hsbc.co.uk",
            to: MY_ADDRESS,
            subject: "Subject 1",
            thread: `james@hsbc.co.uk_${MY_ADDRESS}_Subject 1`,
            body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            age: 1,
            read: false,
            dir: INBOX,
            time: new Date().getTime()
        },
        {
            id: 1,
            from: "sarah@ford.co.uk",
            to: MY_ADDRESS,
            subject: "Subject 2",
            thread: `sarah@ford.co.uk_${MY_ADDRESS}_Subject 2`,
            body: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            age: 2,
            read: false,
            dir: INBOX,
            time: new Date().getTime()
        },
        {
            id: 2,
            from: "tim.jones@hmrc.co.uk",
            to: MY_ADDRESS,
            subject: "Subject 3",
            thread: `tim.jones@hmrc.co.uk_${MY_ADDRESS}_Subject 3`,
            body: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC",
            age: 3,
            read: false,
            dir: INBOX,
            time: new Date().getTime()
        },
        {
            id: 3,
            from: "tim.jones@hmrc.co.uk",
            to: MY_ADDRESS,
            subject: "Subject 3",
            thread: `tim.jones@hmrc.co.uk_${MY_ADDRESS}_Subject 3`,
            body: "Some reply",
            age: 3,
            read: false,
            dir: OUTBOX,
            time: new Date().getTime()
        }
    ]

    const messagesToUse = createMessages(messages);

    const [state, dispatch] = useReducer(Reducer, {
        selected: {
            id: -1,
            to: "",
            from: MY_ADDRESS,
            subject: "",
            body: "",
            time: 0
        },
        messages: messagesToUse,
        selectedThread: [],
        showModal: false,
        mode: "",
        showValidation: false
    });

    const stateValue = useMemo(() => {
        return { state, dispatch };
    }, [state, dispatch]);

    return (
        <GlobalContext.Provider value={stateValue}>
             <ToasterContextProvider>
                <Toaster />
                <HashRouter>
                    <Navbar className="pb-2 px-2 pt-3" id="spaNavBar" bg="dark" variant="dark">
                        <Nav className="mr-auto">
                            <NavLink activeClassName="active" className="nav-link pb-3 pt-1 px-3" to={HOME}>Home</NavLink>
                            <NavLink activeClassName="active" className="nav-link pb-3 pt-1 px-3" to={INBOX}>Inbox</NavLink>
                            <NavLink activeClassName="active" className="nav-link pb-3 pt-1 px-3" to={OUTBOX}>Outbox</NavLink>
                            <NavLink activeClassName="active" className="d-none d-md-block nav-link pb-3 pt-1 px-3" to={NEW}>New</NavLink>
                        </Nav>
                    </Navbar>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to={HOME}></Redirect>
                        </Route>
                        <Route path={HOME}>
                            <Home />
                        </Route>
                        <Route path={INBOX}>
                            <Inbox />
                        </Route>
                        <Route path={OUTBOX}>
                            <Outbox />
                        </Route>
                        <Route path={NEW}>
                            <New />
                        </Route>
                    </Switch>
                </HashRouter>
            </ToasterContextProvider>
        </GlobalContext.Provider>
    )
}