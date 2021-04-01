"use strict;"

import React, { useLayoutEffect, useState, useRef } from 'react';
import { ListItem } from './listItem';
import { getKeyFromMessage } from '../utils/getKeyFromMessage';
import { getMessagesByDirectory } from '../utils/getMessagesByDirectory';
import { GlobalContext } from '../globalContext';

export const BrowserPane = (props) => {

    const context = React.useContext(GlobalContext);

    const [collection, setCollection] = useState([]);

    const onGoingCollection = useRef(collection);

    const getEveryThree = (onGoing = [], collection = [], dir, limit = 3) => {
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

    const scrollHandler = () => {

        const browserPane = document.getElementById("browserPane");

        if (browserPane) {

            const isWithinRange = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
            const isWithinLimit = onGoingCollection.current.length === 0 || onGoingCollection.current.length >= props.limit;

            if (isWithinRange && isWithinLimit) {
                const everyThree = getEveryThree(onGoingCollection.current, context.state.messages, props.dir, props.limit);
                onGoingCollection.current = everyThree;
                setCollection(everyThree);
            }
        }
    }

    useLayoutEffect(() => {

        window.addEventListener("scroll", scrollHandler);
        const firstThree = getEveryThree([], context.state.messages, props.dir);
        onGoingCollection.current = firstThree;
        setCollection(firstThree);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        }

    }, [context.state.messages]);

    return (
        <>
            {collection.length > 0 &&
                <div id="browserPane" className="list-group">
                    {collection.map((item, index) => {
                        console.log("mapping")
                        const key = getKeyFromMessage(item, index);

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