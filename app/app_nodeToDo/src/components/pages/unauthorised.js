"use strict;"

import React from 'react';
import { useHistory } from 'react-router-dom';
import { ContentContainer } from '../contentContainer';
import { Content } from '../content';
import { LOGIN } from '../../constants';

export function Unauthorised() {

  const history = useHistory();

  const onLoginClick = (e) => { e.preventDefault(); history.push(LOGIN)}

  return (
    <ContentContainer>
      <Content title="Unauthorised!"/>
      <p>You must first <a href="#" onClick={onLoginClick}>Log in</a> to access this route.</p>
    </ContentContainer>
  );
}