"use strict;"

import React from 'react';
import { Counter } from './counter';
import { INBOX, OUTBOX } from '../globalConstants';
import { GlobalContext } from '../globalContext';

export function Dashboard() {

    const context = React.useContext(GlobalContext)

    const inboxCount = context.messages.filter(x => x.dir === INBOX).length;

    const outboxCount = context.messages.filter(x => x.dir === OUTBOX).length;

    return(
        <>
            <p>You have <Counter count={inboxCount}/> message(s) in your inbox</p>
            <p>You have <Counter count={outboxCount}/> message(s) in your outbox</p>
        </>
    )
}