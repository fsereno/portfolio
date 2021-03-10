"use strict;"

import React from 'react';
import { ListItem } from './listItem';

export function BrowserPane(props) {
    return(
        <div className="list-group">
            {props.collection.map((selected, index) => {
                return(
                    <ListItem
                        index={index}
                        key={selected.id}
                        selected={selected}
                    />
                )
            })}
        </div>
    )
}