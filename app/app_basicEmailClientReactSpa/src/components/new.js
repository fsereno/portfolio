"use strict;"

import React from 'react';
import { Content } from './content';
import { NewPane } from './newPane';

export function New() {

    return(
      <>
        <Content title="New message" component={NewPane} />
      </>
    )
}