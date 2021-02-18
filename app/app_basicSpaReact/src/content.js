"use strict;"

import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export function Content(props) {
    return(
      <Jumbotron fluid>
        <Container>
          <h1>{props.title}</h1>
          <p>
            {props.content}
          </p>
        </Container>
      </Jumbotron>
    )
}