"use strict;"

import React from 'react';
import { Dashboard } from './dashboard';
import { ContentContainer } from './contentContainer';
import { Content } from "./content";

export function Home() {
  return (
    <ContentContainer>
      <Content title="Home" content="A simple email client application" />
      <Dashboard />
    </ContentContainer>
  )
}