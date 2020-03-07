import React from 'react';
import ReactDom from 'react-dom';

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "James",
  lastName: "Bond"
};

const element = <h1>Hello, {formatName(user)}!</h1>;

ReactDom.render(element, document.getElementById("app"));