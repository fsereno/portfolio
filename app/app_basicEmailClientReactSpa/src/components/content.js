"use strict;"

import React from 'react';

export function Content({title, content}) {
    return (
      <>
        <h1>{title}</h1>
        <p>
          {content}
        </p>
      </>
    )
}