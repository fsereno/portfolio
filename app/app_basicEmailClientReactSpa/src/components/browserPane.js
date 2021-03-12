"use strict;"

import React from 'react';
import { ListItem } from './listItem';
import { getKeyFromMessage } from '../utils/getKeyFromMessage';

export function BrowserPane(props) {
    return(
        <div className="list-group">
            {props.collection.map((item, index) => {

                const key = getKeyFromMessage(item);

                return (
                    <ListItem
                        index={index}
                        item={item}
                        key={key}
                    />
                )
            })}
        </div>
    )
}