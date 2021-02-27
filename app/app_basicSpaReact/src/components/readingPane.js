"use strict;"

import React from 'react';
import { Age } from './age';
import { GlobalContext } from '../globalContext';

export function ReadingPane() {

    const context = React.useContext(GlobalContext);

    return(
        <>
            <Age age={context.selected.age}/>
            <p>From: {context.selected.from}</p>
            {context.selected.body}
        </>
    )
}