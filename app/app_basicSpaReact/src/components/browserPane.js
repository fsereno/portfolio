"use strict;"

import React from 'react';
import { ListItem } from './listItem';
import { EmailClientContext } from '../emailClientContext';

export function BrowserPane() {

    const context = React.useContext(EmailClientContext)

    return(
        <div className="list-group">
            {context.collection.map((email, index) => {
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