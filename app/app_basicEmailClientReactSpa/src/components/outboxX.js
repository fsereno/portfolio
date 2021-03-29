"use strict;"

import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Content } from "./content";
import { OutboxClient } from "./outboxClient";
import { GlobalContext } from '../globalContext';
import { DESELECT_THREAD } from '../globalConstants';

export function Outbox() {

    const context = React.useContext(GlobalContext);

    const location = useLocation();

    useLayoutEffect(() => {
      context.dispatch({ type: DESELECT_THREAD });
    },[location]);

    return(
      <Content title="Outbox" component={OutboxClient} />
    )
}