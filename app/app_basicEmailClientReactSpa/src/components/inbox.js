"use strict;"

import React from 'react';
import { Content } from './content';
import { InboxClient } from './inboxClient';

export function Inbox() {
  return (
    <>
      <Content title="Inbox" component={InboxClient} />
    </>
  )
}