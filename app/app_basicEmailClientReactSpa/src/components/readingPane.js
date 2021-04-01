"use strict;"

import React from 'react';
import { Age } from './age';
import { getKeyFromMessage } from '../utils/getKeyFromMessage';
import { EmailClientContext } from '../contexts';
import { MIN_VIEWPORT_WIDTH } from '../constants'

export function ReadingPane() {

    const context = React.useContext(EmailClientContext);

    return(
        <div id="readingPane">
            {context.state.selectedThread.map((item, index) => {

                const key = getKeyFromMessage(item, index);

                const showSubject = window.innerWidth > MIN_VIEWPORT_WIDTH || window.innerWidth < MIN_VIEWPORT_WIDTH && index > 0;

                return (
                    <div key={key}>
                        {index > 0 && <hr/>}
                        <Age age={item.age}/>
                        <p className="mb-0"><strong>From:</strong> {item.from}</p>
                        <p className="mb-0"><strong>To:</strong> {item.to}</p>
                        { showSubject && <p className="mb-0"><strong>Subject:</strong> {item.subject}</p> }
                        <div className="mt-3">
                            {item.body}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}