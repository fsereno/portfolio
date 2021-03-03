"use strict;"

import React from 'react';
import { Dashboard } from './dashboard';
import { Content } from "./content";

export function Home() {
    return(
      <Content title="Home" content="This is the home route" component={Dashboard} />
    )
}