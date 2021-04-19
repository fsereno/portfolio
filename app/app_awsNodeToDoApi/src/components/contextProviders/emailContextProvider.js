"use strict;"

import React, { useReducer } from 'react';
import { EmailContextReducer } from '../../reducers/emailContextReducer';
import { INBOX, MY_ADDRESS, INITIAL_NUMBER_OF_MESSAGES } from '../../constants';
import { EmailContext } from '../../contexts';
import { getRandomInt } from '../../../../js/modules/utils/randomUtil';

function createMessages(numberOf) {

    const result = [];

    const bodies = [
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC"
    ];

    const emailAddresses = [
        "james@itservices.co.uk",
        "anna@squaresource.co.uk",
        "matt@mgelectricals.co.uk",
        "sarah@the-coffee-shop.co.uk"
    ]

    for (let i = 0; i < numberOf; i++) {

        const emailBodyRandomInt = getRandomInt(0, 2);
        const emailsRandomInt = getRandomInt(0, 3);
        const dummyEmail = emailAddresses[emailsRandomInt];

        result.push(
            {
                id: i,
                from: dummyEmail,
                to: MY_ADDRESS,
                subject: `Subject ${i}`,
                thread: `${dummyEmail}_${MY_ADDRESS}_Subject ${i}`,
                body: bodies[emailBodyRandomInt],
                age: 0,
                read: false,
                dir: INBOX,
                time: new Date().getTime()
            },
        )
    }

    return result;
}
export function EmailContextProvider({children}) {

    const messagesToUse = createMessages(INITIAL_NUMBER_OF_MESSAGES);

    const [state, dispatch] = useReducer(EmailContextReducer, {
        messages: messagesToUse
    });

    const stateValue = { state, dispatch };

    return (
        <EmailContext.Provider value={stateValue}>
             {children}
        </EmailContext.Provider>
    )
}