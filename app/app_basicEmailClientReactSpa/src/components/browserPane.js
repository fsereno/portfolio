"use strict;"

import React from 'react';
import { ListItem } from './listItem';

export function BrowserPane(props) {
    return(
        <div className="list-group">
            {props.collection.map((item, index) => {
                return(
                    <ListItem
                        index={index}
                        key={item.id}
                        item={item}
                    />
                )
            })}
        </div>
    )
}