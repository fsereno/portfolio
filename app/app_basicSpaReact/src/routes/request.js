"use strict;"

import React from 'react';
import { Content } from '../content'
import { RequestForm } from '../requestForm/app';

export function Request() {
    return(
      <>
        <Content title="Request" content="Submit a request" component={RequestForm} />
      </>
    )
}