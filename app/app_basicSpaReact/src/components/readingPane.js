"use strict;"

import React from 'react';
import { Age } from './age';
import { GlobalContext } from '../globalContext';

export function ReadingPane() {

    const context = React.useContext(GlobalContext);

    return(
        <>
            {context.selected.map((selected, index) => {
                return (
                    <div>
                        {index > 0 && <hr/>}
                        <Age age={selected.age}/>
                        <p className="mb-0"><strong>From:</strong> {selected.from}</p>
                        <p className="mb-0"><strong>To:</strong> {selected.to}</p>
                        {index > 0 && <p className="lead mb-0"><strong>Subject:</strong> {selected.subject}</p>}
                        <div className="mt-3">
                            {selected.body}
                        </div>
                    </div>
                )
            })}
        </>
    )
}