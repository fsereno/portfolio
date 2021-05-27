"use strict;"

import React from 'react';
import { useHistory } from 'react-router-dom';
import { ContentContainer } from '../contentContainer';
import { Content } from '../content';
import { Button } from 'react-bootstrap';
import { LOGIN, REGISTER } from '../../constants';

export function Unauthorised() {

  const history = useHistory();

  return (
    <ContentContainer>
      <Content title="Unauthorised!"/>
      <p>You must first log in to access this route.</p>
      <p>Please create a new user, or log in with an existing user.</p>
      <div className="mt-4">
        <Button className="mr-3" variant="dark" type="button" onClick={() => history.push(LOGIN)}>Login</Button>
        <Button variant="dark" type="button" onClick={() => history.push(REGISTER)}>Create a user</Button>
      </div>
    </ContentContainer>
  )
}