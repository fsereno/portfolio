"use strict;"

import React from 'react';
import { Content } from "./content";
import { OutboxClient } from "./outboxClient";

export function Outbox() {
    return(
      <Content title="Outbox" component={OutboxClient} />
    )
}