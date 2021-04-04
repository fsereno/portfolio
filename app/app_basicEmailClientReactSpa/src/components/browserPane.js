"use strict;"

import React, { useLayoutEffect, useState } from 'react';
import { ListItem } from './listItem';
import { getKeyFromMessage } from '../utils/getKeyFromMessage';
import { getMessagesByDirectory } from '../utils/getMessagesByDirectory';
import { GlobalContext, EmailClientContext } from '../contexts';

export const BrowserPane = (props) => {

    const context = React.useContext(GlobalContext);

    const emailClientContext = React.useContext(EmailClientContext);

    const [collection, setCollection] = useState([]);

    const getNext = (onGoing = [], collection = [], dir, limit = 3) => {
        let result = [...onGoing];
        let collectionByDir = getMessagesByDirectory(collection, dir);
        let count = 0;
        let i = onGoing.length;

        while (count < limit && i < collectionByDir.length) {
            result.push(collectionByDir[i]);
            count++;
            i++;
        }

        return result;
    }

    const loadMoreClickHandler = () => {
        const next = getNext(collection, context.state.messages, props.dir, props.limit);
        setCollection(next);
    }

    useLayoutEffect(() => {
        const firstThree = getNext([], context.state.messages, props.dir);
        setCollection(firstThree);
    }, [context.state.messages]);

    return (
        <>
            {collection.length > 0 &&
                <>
                    <div id="browserPane" className="list-group">
                        {collection.map((item, index) => {
                            const key = getKeyFromMessage(item, index);

                            return (
                                <ListItem
                                    index={index}
                                    item={item}
                                    key={key}
                                    active={emailClientContext.state.selected.id === item.id}
                                />
                            )
                        })}
                    </div>
                    <button className="btn btn-dark col-4 mt-5 offset-4" onClick={loadMoreClickHandler}>Load more</button>
                </>
            }
            {collection.length === 0 &&
                <p>You have no messages</p>
            }
        </>
    )
}