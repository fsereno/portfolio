"use strict;"

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Router } from './components/router';
import { GlobalContext } from './globalContext';

const collection = [
  {
      id: 0,
      from: "someone@email.co.uk",
      heading: "Some heading 1",
      body: "Some body text here 1",
      age: 1,
      read: true
  },
  {
      id: 1,
      from: "someone@email.co.uk",
      heading: "Some heading 2",
      body: "Some body text here 2",
      age: 2,
      read: false
  },
  {
      id: 2,
      from: "someone@email.co.uk",
      heading: "Some heading 3",
      body: "Some body text here 3",
      age: 3,
      read: false
  }
]

function App() {

  const [ _context, setContext ] = useState({
      inbox: {
        collection,
        selected: collection[0]
      }
  });

  const context = _context;
  context.setContext = setContext;

  return (
    <GlobalContext.Provider value={context}>
      <Router />
    </GlobalContext.Provider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('result')
);