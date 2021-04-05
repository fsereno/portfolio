"use strict;"

import React from 'react';
import { OutboxClient } from "../outboxClient";
import { ContentContainer } from '../contentContainer';
import { Content } from '../content';

export function Outbox() {
  return (
    <ContentContainer>
      <Content title="Outbox" />
      <OutboxClient />
    </ContentContainer>
  )
}