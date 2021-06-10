"use strict;"

import React from 'react';
import Container from "react-bootstrap/Container";

export function ContentContainer({ children }) {
  return (
      <Container fluid className="py-4">
        {children}
      </Container>
  );
}