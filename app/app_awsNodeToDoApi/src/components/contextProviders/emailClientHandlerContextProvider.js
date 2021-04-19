"use strict;"

import React, { useMemo, useCallback }from 'react';
import { SELECT, MIN_VIEWPORT_WIDTH } from '../../constants';
import { EmailClientContext, EmailClientHandlerContext, EmailContext, EmailModalContext } from '../../contexts';
import { getEmailsByThread } from '../../utils/getEmailsByThread';

export function EmailClientHandlerContextProvider({children}) {

    const emailContext = React.useContext(EmailContext);
    const emailClientContext = React.useContext(EmailClientContext);
    const emailModalContext = React.useContext(EmailModalContext);

    const selectListItemHandler = useCallback((item) => {
        const showModal = window.innerWidth < MIN_VIEWPORT_WIDTH;

        if (item) {
            const thread = getEmailsByThread(emailContext.state.messages, item);
            emailClientContext.dispatch({
                type: SELECT,
                thread: thread,
                item: item
            });
        }

        emailModalContext.setShow(showModal);
    },[emailContext.state.messages])

    const context = useMemo( () => {
        return { selectListItemHandler }
    },[selectListItemHandler])

    return (
        <EmailClientHandlerContext.Provider value={context}>
            {children}
        </EmailClientHandlerContext.Provider>
    )
}