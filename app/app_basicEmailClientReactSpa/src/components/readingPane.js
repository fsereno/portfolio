"use strict;"

import React from 'react';
import { Age } from './age';
import { GlobalContext } from '../globalContext';

export function ReadingPane() {

    const context = React.useContext(GlobalContext);

    return(
        <>
            {context.selectedThread.map((thread, index) => {
                return (
                    <div>
                        {index > 0 && <hr/>}
                        <Age age={thread.age}/>
                        <p className="mb-0"><strong>From:</strong> {thread.from}</p>
                        <p className="mb-0"><strong>To:</strong> {thread.to}</p>
                        {index > 0 && <p className="lead mb-0"><strong>Subject:</strong> {thread.subject}</p>}
                        <div className="mt-3">
                            {thread.body}
                        </div>
                    </div>
                )
            })}
        </>
    )
}