"use strict;"

import React from 'react';
import { ContentContainer } from '../contentContainer';
import { Content } from '../content';
import { LogoutForm } from '../logoutForm';

export function Logout() {
  return (
    <ContentContainer>
      <Content title="Logout" />
      <LogoutForm />
    </ContentContainer>
  )
}