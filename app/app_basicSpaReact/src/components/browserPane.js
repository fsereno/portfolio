"use strict;"

import React from 'react';
import { ListItem } from './listItem';

export function BrowserPane(props) {
    return(
        <div className="list-group">
            {props.collection.map((email, index) => {
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