"use strict;"

import React, { useEffect, useLayoutEffect, useState, useMemo, useRef } from 'react';
import { ListItem } from './listItem';
import { getKeyFromMessage } from '../utils/getKeyFromMessage';
import { getMessagesByDirectory } from '../utils/getMessagesByDirectory';
import { GlobalContext } from '../globalContext';

export const BrowserPane = (props) => {

    const context = React.useContext(GlobalContext);

    const [ collection, setCollection ] = useState([]);

    const onGoingCollection = useRef(collection);

    const getEveryThree = (onGoing = [], collection = [], dir, indexLimit = 3) => {
        let result = [...onGoing];
        let count = 0;
        
        for (let i = onGoing.length; i < onGoing.length + indexLimit; i++) {
            result.push(collection[i])
        }

        return result;
    }

    const scrollHandler = () => {

        let browserPane = document.getElementById("browserPane");

        if (browserPane) {

            const isWithinRange = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;

            if ( isWithinRange ) {
                const firstThree = getEveryThree(onGoingCollection.current, context.state.messages, props.dir); //[context.state.messages[0], context.state.messages[1], context.state.messages[3]]
                const collectionByDir = firstThree //getMessagesByDirectory(firstThree, props.dir);
                onGoingCollection.current = collectionByDir;
                setCollection(collectionByDir);
            }
        }
    }

    useLayoutEffect(() => {

        window.addEventListener("scroll", scrollHandler);

        const mimicAjaxCall  = setTimeout(() => {
            //console.log("browser pane useEffect fired after timeout 1000";
            const firstThree = getEveryThree([], context.state.messages,props.dir); //[context.state.messages[0], context.state.messages[1], context.state.messages[3]]
            const collectionByDir = firstThree// getMessagesByDirectory(firstThree, props.dir);
            onGoingCollection.current = collectionByDir;
            setCollection(collectionByDir);
        }, 500)

        return () => {
            window.removeEventListener("scroll", scrollHandler);
            clearTimeout(mimicAjaxCall);
        }
    },[context.state.messages]);

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