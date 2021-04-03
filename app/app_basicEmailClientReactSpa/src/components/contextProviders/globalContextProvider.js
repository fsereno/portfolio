"use strict;"

import React, { useReducer } from 'react';
import { Reducer } from '../../reducers/reducer';
import { INBOX, MY_ADDRESS, INITIAL_NUMBER_OF_MESSAGES } from '../../constants';
import { GlobalContext } from '../../contexts';
import { getRandomInt } from '../../../../js/modules/utils/randomUtil';

function createMessages(numberOf) {

    const result = [];

    const bodies = [
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC"
    ];

    for (let i = 0; i < numberOf; i++) {

        const randomInt = getRandomInt(0, 2);

        result.push(
            {
                id: Math.random(),
                from: `dummy.${i}@email.co.uk`,
                to: MY_ADDRESS,
                subject: `Subject ${i}`,
                thread: `dummy.${i}@email.co.uk_${MY_ADDRESS}_Subject ${i}`,
                body: bodies[randomInt],
                age: randomInt,
                read: false,
                dir: INBOX,
                time: new Date().getTime()
            },
        )
    }

    return result;
}
export function GlobalContextProvider({children}) {

    const messagesToUse = createMessages(INITIAL_NUMBER_OF_MESSAGES);

    const [state, dispatch] = useReducer(Reducer, {
        messages: messagesToUse
    });

    const stateValue = { state, dispatch };

    return (
        <GlobalContext.Provider value={stateValue}>
             {children}
        </GlobalContext.Provider>
    )
}