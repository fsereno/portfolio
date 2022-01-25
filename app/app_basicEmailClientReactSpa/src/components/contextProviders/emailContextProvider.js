"use strict;"

import React, { useReducer } from 'react';
import { EmailContextReducer } from '../../reducers/emailContextReducer';
import { INITIAL_NUMBER_OF_MESSAGES, INBOX } from '../../constants';
import { EmailContext } from '../../contexts';
import { createMessages } from '../../utils/createMessages';

export function EmailContextProvider({children, dir}) {

    const messagesToUse = createMessages(INITIAL_NUMBER_OF_MESSAGES, dir);
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