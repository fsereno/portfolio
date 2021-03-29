"use strict;"

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Content } from './content';
import { NewPane } from './newPane';
import { GlobalContext } from '../globalContext';
import { NEW_MESSAGE } from '../globalConstants';

export function New() {

    const context = React.useContext(GlobalContext);

    const location = useLocation();

    useEffect(() => {
      context.dispatch( { type: NEW_MESSAGE, showModal: false } );
    },[location]);

    return(
      <>
        <Content title="New message" component={NewPane} />
      </>
    )
}