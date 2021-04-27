"use strict;"

import React from 'react';
import { ContentContainer } from '../contentContainer';
import { Content } from '../content';
import { RegisterForm } from '../registerForm';

export function Register() {
  return (
    <ContentContainer>
      <Content title="Register" />
      <RegisterForm />
    </ContentContainer>
  )
}