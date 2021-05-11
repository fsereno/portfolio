"use strict;"

import React from 'react';
import { ContentContainer } from '../contentContainer';
import { Content } from '../content';
import { EditForm } from '../editForm';

export function Edit() {
  return (
    <ContentContainer>
      <Content title="Create / Edit" />
      <EditForm />
    </ContentContainer>
  )
}