"use strict;"

import React, { useEffect } from 'react';
import { ReplyPane } from './replyPane';
import { Content } from './content';
import { EmailModal } from './emailModal';
import { REPLY } from '../globalConstants';
import { GlobalContext } from '../globalContext';

export function New() {

    const context = React.useContext(GlobalContext);

    return(
      <>
        <Content title="New message" component={ReplyPane} />
      </>
    )
}