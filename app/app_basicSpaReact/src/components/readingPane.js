"use strict;"

import React from 'react';
import { Age } from './age';
import { GlobalContext } from '../globalContext';

export function ReadingPane() {

    const context = React.useContext(GlobalContext);

    return(
        <>
            {context.selected.map(selected => {
                return (
                    <>
                        <Age age={selected.age}/>
                        <p>From: {selected.from}</p>
                        <p>To: {selected.to}</p>
                        <p>To: {selected.subject}</p>
                        {selected.body}
                    </>
                )
            })}
        </>
    )
}