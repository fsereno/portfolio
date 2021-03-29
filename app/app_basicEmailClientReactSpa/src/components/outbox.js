"use strict;"

import React, { useLayoutEffect } from 'react';
import { Content } from "./content";
import { useLocation } from 'react-router-dom';
import { OutboxClient } from "./outboxClient";
import { GlobalContext } from '../globalContext';
import { DESELECT_THREAD } from '../globalConstants';

export function Outbox() {
  return(
    <Content title="Outbox" component={OutboxClient} />
  )
}