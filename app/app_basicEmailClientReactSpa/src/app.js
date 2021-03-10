"use strict;"

import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { Router } from './components/router';
import { reducer } from './reducers/reducer';
import { EmailModal } from './components/emailModal';
import { GlobalContext } from './globalContext';
import { MY_ADDRESS, INBOX, READ } from './globalConstants';

const messages = [
  {
    id: 0.5,
    from: "james@hsbc.co.uk",
    to: MY_ADDRESS,
    subject: "Subject 1",
    thread: `james@hsbc.co.uk_${MY_ADDRESS}_Subject 1`,
    body: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    age: 0,
    read: false,
    dir: INBOX
  },
  {
    id: 0,
    from: "james@hsbc.co.uk",
    to: MY_ADDRESS,
    subject: "Subject 1",
    thread: `james@hsbc.co.uk_${MY_ADDRESS}_Subject 1`,
    body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    age: 1,
    read: false,
    dir: INBOX
  },
  {
    id: 1,
    from: "sarah@ford.co.uk",
    to: MY_ADDRESS,
    subject: "Subject 2",
    thread: `sarah@ford.co.uk_${MY_ADDRESS}_Subject 2`,
    body: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    age: 2,
    read: false,
    dir: INBOX
  },
  {
    id: 2,
    from: "tim.jones@hmrc.co.uk",
    to: MY_ADDRESS,
    subject: "Subject 3",
    thread: `tim.jones@hmrc.co.uk_${MY_ADDRESS}_Subject 3`,
    body: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC",
    age: 3,
    read: false,
    dir: INBOX
  }
]

function App() {

  const [ state, dispatch] = useReducer(reducer, {
    selected: {
      id: -1,
      to: "",
      from: MY_ADDRESS,
      subject: "",
      body: "",
    },
    messages,
    selectedThread: [],
    showModal: false,
    mode: READ,
    showValidation: false
  });

  const context = { ...state, dispatch };

  return (
    <GlobalContext.Provider value={context}>
      <Router />
      <EmailModal />
    </GlobalContext.Provider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('result')
);