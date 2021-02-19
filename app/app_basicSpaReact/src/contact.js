"use strict;"

import React from 'react';
import { Content } from './content'
import { ContactForm } from './contactfForm';

export function Contact() {
    return(
      <>
        <Content title="Contact" content="Submit a request" component={ContactForm} />
      </>
    )
}