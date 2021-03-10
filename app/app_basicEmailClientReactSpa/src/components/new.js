"use strict;"

import React from 'react';
import { ReplyPane } from './replyPane';
import { Content } from './content';

export function New() {
    return(
      <>
        <Content title="New message" component={ReplyPane} />
      </>
    )
}