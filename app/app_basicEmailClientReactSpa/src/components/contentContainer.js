"use strict;"

import React from 'react';
import Container from "react-bootstrap/Container";
import { EmailClientContextProvider } from './contextProviders/emailClientContextProvider';
import { EmailModalContextProvider } from './contextProviders/emailModalContextProvider';
import { EmailClientHandlerContextProvider } from './contextProviders/emailClientHandlerContextProvider';

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