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
      body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      age: 1,
      read: true
  },
  {
      id: 1,
      from: "someone@email.co.uk",
      heading: "Some heading 2",
      body: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      age: 2,
      read: false
  },
  {
      id: 2,
      from: "someone@email.co.uk",
      heading: "Some heading 3",
      body: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC",
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