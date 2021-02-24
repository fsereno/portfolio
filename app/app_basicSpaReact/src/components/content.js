"use strict;"

import React from 'react';
import Container from "react-bootstrap/Container";

export function Content(props) {
    return(
      <Container className="py-4">
        <h1>{props.title}</h1>
        <p>
          {props.content}
        </p>
        {props.component &&
            <props.component />
        }
      </Container>
    )
}