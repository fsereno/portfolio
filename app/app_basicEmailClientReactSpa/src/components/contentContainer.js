"use strict;"

import React from 'react';
import Container from "react-bootstrap/Container";
import { EmailClientContextProvider } from './emailClientContextProvider';
import { EmailModalContextProvider } from './emailModalContextProvider';
import { EmailClientHandlerContextProvider } from './emailClientHandlerContextProvider';

export function ContentContainer({ children }) {
  return (
    <EmailClientContextProvider>
      <EmailModalContextProvider>
        <EmailClientHandlerContextProvider>
          <Container fluid className="py-4">
            {children}
          </Container>
        </EmailClientHandlerContextProvider>
      </EmailModalContextProvider>
    </EmailClientContextProvider>
  )
}