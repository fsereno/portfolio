"use strict;"

import React from 'react';
import { ReadingPane } from './readingPane';
import { EmailForm } from './emailForm';

export function ReplyPane() {
    return(
        <>
            <EmailForm/>
            <ReadingPane/>
        </>
    )
}