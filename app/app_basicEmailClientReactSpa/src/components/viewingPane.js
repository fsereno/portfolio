"use strict;"

import React from 'react';
import { READ, REPLY, NEW_MESSAGE } from '../globalConstants';
import { ReadingPane } from './readingPane';
import { ReplyPane } from './replyPane';
import { NewPane } from './newPane';
import { GlobalContext } from '../globalContext';

export function ViewingPane() {

    const context = React.useContext(GlobalContext);

    return (
        <>
            {context.mode === READ &&
                <ReadingPane/>
            }
            {context.mode === REPLY &&
                <ReplyPane/>
            }
            {context.mode === NEW_MESSAGE &&
                <NewPane/>
            }
        </>
    )
}