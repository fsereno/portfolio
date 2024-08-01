"use strict;"

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ContentContainer } from '../contentContainer';
import { Content } from '../content';
import { LOGIN, REGISTER } from '../../constants';

export function Unauthorised() {

  const history = useNavigate();
  const onLoginClick = (e) => { e.preventDefault(); history(LOGIN)}
  const onRegisterClick = (e) => { e.preventDefault(); history(REGISTER)}

  return (
    <ContentContainer>
      <Content title="Unauthorised!"/>
      <p>You must first <a href="#" onClick={onLoginClick}>Log in</a> to access this route.</p>
      <p>Please <a href="#" onClick={onRegisterClick}>Create a new user</a>, or log in with an existing user.</p>
    </ContentContainer>
  );
}