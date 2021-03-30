"use strict;"

import React, { useEffect, useState } from 'react';
import { ListItem } from './listItem';
import { getKeyFromMessage } from '../utils/getKeyFromMessage';
import { getMessagesByDirectory } from '../utils/getMessagesByDirectory';
import { GlobalContext } from '../globalContext';

export const BrowserPane = (props) => {

    const context = React.useContext(GlobalContext)

    const [ collection, setCollection ] = useState([]);

    useEffect(() => {
        const mimicAjaxCall  = setTimeout(() => {
            console.log("browser pane useEffect fired after timeout 1000")
            const collection = getMessagesByDirectory(context.state.messages, props.dir);
            setCollection(collection);
        }, 1000)

        return () => clearTimeout(mimicAjaxCall);
    },[])

    return (
        <>
            {collection.length > 0 &&
                <div className="list-group">
                    {collection.map((item, index) => {
                        console.log("mapping")
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
            }
            {collection.length === 0 &&
                <p>You have no messages</p>
            }
        </>
    )
}