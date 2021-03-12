"use strict;"

import React from 'react';
import { Age } from './age';
import { getKeyFromMessage } from '../utils/getKeyFromMessage';
import { GlobalContext } from '../globalContext';

export function ReadingPane() {

    const context = React.useContext(GlobalContext);

    return(
        <>
            {context.selectedThread.map((item, index) => {

                const key = getKeyFromMessage(item);

                return (
                    <div key={key}>
                        {index > 0 && <hr/>}
                        <Age age={item.age}/>
                        <p className="mb-0"><strong>From:</strong> {item.from}</p>
                        <p className="mb-0"><strong>To:</strong> {item.to}</p>
                        {index > 0 && <p className="lead mb-0"><strong>Subject:</strong> {item.subject}</p>}
                        <div className="mt-3">
                            {item.body}
                        </div>
                    </div>
                )
            })}
        </>
    )
}