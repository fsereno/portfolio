"use strict;"

import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Content } from './content';
import { InboxClient } from './inboxClient';
import { GlobalContext } from '../globalContext';
import { DESELECT_THREAD } from '../globalConstants';

export function Inbox() {

    const context = React.useContext(GlobalContext);

    const location = useLocation();

    useLayoutEffect(() => {
      context.dispatch({ type: DESELECT_THREAD });
    },[location]);

    return(
      <Content title="Inbox" component={InboxClient} />
    )
}