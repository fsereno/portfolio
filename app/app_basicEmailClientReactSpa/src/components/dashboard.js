"use strict;"

import React from 'react';
import { Counter } from './counter';
import { getMessagesByDirectory } from '../utils/getMessagesByDirectory';
import { INBOX, OUTBOX } from '../globalConstants';
import { GlobalContext } from '../globalContext';

export function Dashboard() {

    const context = React.useContext(GlobalContext)

    const inboxCount = getMessagesByDirectory(context.state.messages, INBOX).length;

    const outboxCount = getMessagesByDirectory(context.state.messages, OUTBOX).length;

    return (
        <>
            <p id="inboxCounter">You have <Counter count={inboxCount}/> message(s) in your inbox</p>
            <p id="outboxCounter">You have <Counter count={outboxCount}/> message(s) in your outbox</p>
        </>
    )
}