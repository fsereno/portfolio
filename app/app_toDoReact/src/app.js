"use strict;"

import React from 'react';
import ReactDom from 'react-dom';

const app = (function() {
  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }
  function creatToDoItem(item) {
  return <li class="list-group-item d-flex justify-content-between align-items-center">{item} <a href="#" class="badge badge-danger delete">Delete</a></li>
  }
  function creatList(listItems) {
  return <ul class="list-group">
          {listItems.map((item) => {
            return this.creatToDoItem(item)
          })}
        </ul>
  }
  return {
    formatName: formatName,
    creatToDoItem: creatToDoItem,
    creatList: creatList
  }
})();

let toDoList = [
  "item 1",
  "item 2",
  "item 3"
];

const output =
<div class="row">
  <div class="col-lg-4">
    <h3>Result:</h3>
    {app.creatList(toDoList)}
  </div>
</div>

ReactDom.render(output, document.getElementById("result"));