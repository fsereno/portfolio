"use strict;"

import React from 'react';
import { ContentContainer } from '../contentContainer';
import { Content } from '../content';
import { ManageContextProvider } from '../contextProviders/manageContextProvider';
import { ManageContainer } from '../manageContainer';

export function Manage() {
  return (
    <ContentContainer>
      <Content title="Manage" centre={true} />
      <ManageContextProvider>
        <ManageContainer/>
      </ManageContextProvider>
    </ContentContainer>
  )
}