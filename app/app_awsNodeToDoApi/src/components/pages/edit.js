"use strict;"

import React from 'react';
import { ContentContainer } from '../contentContainer';
import { Content } from '../content';
import { ItemForm } from '../itemForm';

export function Edit() {
  return (
    <ContentContainer>
      <Content title="Edit" />
      <ItemForm />
    </ContentContainer>
  )
}