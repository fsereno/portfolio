"use strict;"

import React from 'react';
import { ListItem } from './listItem';
import { GlobalContext } from '../globalContext';

export function BrowserPane() {

    const context = React.useContext(GlobalContext)

    return(
        <div className="list-group">
            {context.inbox && context.inbox.map((email, index) => {
                return(
                    <ListItem
                        index={index}
                        key={email.id}
                        id={email.id}
                        from={email.from}
                        age={email.age}
                        heading={email.heading}
                        body={email.body}
                    />
                )
            })}
        </div>
    )
}