"use strict;"

import React from 'react';
import { Content } from "../content";
import { EmailClient } from "../emailClient/app";

export function Inbox() {
    return(
      <Content title="Inbox" component={EmailClient} />
    )
}