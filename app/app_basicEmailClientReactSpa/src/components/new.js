"use strict;"

import React from 'react';
import { NewPane } from './newPane';
import { ContentContainer } from './contentContainer';
import { Content } from "./content";

export function New() {
  return (
    <ContentContainer>
      <Content title="New message" />
      <NewPane />
    </ContentContainer>
  )
}