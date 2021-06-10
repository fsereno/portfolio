"use strict;"

import React from 'react';
import { ContentContainer } from '../contentContainer';
import { Content } from '../content';
import { RegisterForm } from '../registerForm';
import { RecaptchaContextProvider } from '../../../../js/modules/react/recaptchaContextProvider';

export function Register() {
  return (
    <ContentContainer>
      <Content title="Create a user" content="You must create a user to log in and access the API" />
      <RecaptchaContextProvider>
        <RegisterForm />
      </RecaptchaContextProvider>
    </ContentContainer>
  );
}