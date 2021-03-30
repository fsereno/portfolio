"use strict;"

import React, { useReducer } from 'react';
import { Reducer } from '../reducers/reducer';
import { INBOX, OUTBOX, MY_ADDRESS } from '../globalConstants';
import { GlobalContext } from '../globalContext';

function createMessages(messages) {
    const limit = 3000;
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
export function GlobalContextProvider({children}) {

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

    const stateValue = { state, dispatch };

    return (
        <GlobalContext.Provider value={stateValue}>
             {children}
        </GlobalContext.Provider>
    )
}