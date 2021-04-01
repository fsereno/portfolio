"use strict;"

import React, { useMemo, useCallback }from 'react';
import { SELECT, MIN_VIEWPORT_WIDTH } from '../constants';
import { EmailClientContext, EmailClientHandlerContext, GlobalContext, EmailModalContext } from '../contexts';
import { getEmailsByThread } from '../utils/getEmailsByThread';

export function EmailClientHandlerContextProvider({children}) {

    const globalContext = React.useContext(GlobalContext);
    const emailClientContext = React.useContext(EmailClientContext);
    const emailModalContext = React.useContext(EmailModalContext);

    const selectListItemHandler = useCallback((item) => {
        const showModal = window.innerWidth < MIN_VIEWPORT_WIDTH;

        if (item) {
            const thread = getEmailsByThread(globalContext.state.messages, item);
            emailClientContext.dispatch({
                type: SELECT,
                thread: thread,
                item: item
            });
        }

        emailModalContext.setShow(showModal);
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