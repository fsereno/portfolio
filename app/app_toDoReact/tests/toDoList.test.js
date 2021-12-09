/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { render, unmountComponentAtNode } from "react-dom";
 import { act } from "react-dom/test-utils";
 import ToDoList from '../src/toDoList';

 let container = null;

 beforeEach(() => {
   // setup a DOM element as a render target
   container = document.createElement("div");
   document.body.appendChild(container);
 });

 afterEach(() => {
   // cleanup on exiting
   unmountComponentAtNode(container);
   container.remove();
   container = null;
 });

 it("renders", () => {
   act(() => {
     render(<ToDoList />, container);
   });
   expect(container.querySelector('#toDoList')).toBeTruthy();
 });