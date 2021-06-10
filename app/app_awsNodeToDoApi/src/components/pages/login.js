"use strict;"

import React from 'react';
import { ContentContainer } from '../contentContainer';
import { Content } from '../content';
import { LoginForm } from '../loginForm';

export function Login() {
  return (
    <ContentContainer>
      <Content title="Login" />
      <LoginForm />
    </ContentContainer>
  );
}