"use strict;"

import React from 'react';
import { Content } from "./content";
import { EmailClient } from "./emailClient";

export function Inbox() {
    return(
      <Content title="Inbox" content="This is the inbox route" component={EmailClient} />
    )
}