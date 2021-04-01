"use strict;"

import React from 'react';
import { InboxClient } from './inboxClient';
import { ContentContainer } from './contentContainer';
import { Content } from "./content";

export function Inbox() {
  return (
    <ContentContainer>
      <Content title="Inbox" />
      <InboxClient />
    </ContentContainer>
  )
}