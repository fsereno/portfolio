"use strict;"

import React from 'react';

export function Content({title, content, centre}) {
    return (
      <>
        <h1 className={`${ centre ? "text-center" : "" }`}>{title}</h1>
        <p>
          {content}
        </p>
      </>
    )
}