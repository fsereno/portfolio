"use strict;"

import React, { useMemo, useCallback }from 'react';
import { SELECT, MIN_VIEWPORT_WIDTH } from '../globalConstants';
import { EmailClientContext, EmailClientHandlerContext, GlobalContext, EmailModalContext } from '../globalContext';
import { getEmailsByThread } from '../utils/getEmailsByThread';

export function EmailClientHandlerContextProvider({children}) {

    const globalContext = React.useContext(GlobalContext);
    const emailClientContext = React.useContext(EmailClientContext);
    const emailModalContext = React.useContext(EmailModalContext);

    const selectListItemHandler = useCallback((item) => {
        const showModal = window.innerWidth < MIN_VIEWPORT_WIDTH;

        if (item) {

            console.log(globalContext.state.messages)
            console.log(item)

            const thread = getEmailsByThread(globalContext.state.messages, item);
            
            console.log(thread)
            emailClientContext.dispatch({
                type: SELECT,
                thread: thread,
                item: item
            });
        }

        emailModalContext.setState(showModal);
    },[globalContext.state.messages])

    const context = useMemo( () => {
        return { selectListItemHandler }
    },[selectListItemHandler])

    return (
        <EmailClientHandlerContext.Provider value={context}>
            {children}
        </EmailClientHandlerContext.Provider>
    )
}