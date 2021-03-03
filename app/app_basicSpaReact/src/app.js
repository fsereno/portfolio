"use strict;"

import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { Router } from './components/router';
import { reducer } from './reducers/reducer';
import { GlobalContext } from './globalContext';
import { INBOX } from './globalConstants';

const messages = [
  {
      id: 0,
      from: "someone@email.co.uk",
      heading: "Some heading 1",
      body: [ "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." ],
      age: 1,
      read: false,
      dir: INBOX
  },
  {
      id: 1,
      from: "someone@email.co.uk",
      heading: "Some heading 2",
      body: [ "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source." ],
      age: 2,
      read: false,
      dir: INBOX
  },
  {
      id: 2,
      from: "someone@email.co.uk",
      heading: "Some heading 3",
      body: [ "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC" ],
      age: 3,
      read: false,
      dir: INBOX
  }
]

function App() {

  const [ state, dispatch] = useReducer(reducer, {
    messages,
    selected: {},
    isSelected: false,
    isReply: false
  });

  const context = { ...state, dispatch };

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