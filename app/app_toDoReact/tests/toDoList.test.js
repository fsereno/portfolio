/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ToDoList from '../src/toDoList';

let container = null;
let timeout = null

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
  timeout = null
});

it("renders", () => {
  act(() => {
    render(<ToDoList />, container);
  });
  expect(container.querySelector('#toDoList')).toBeTruthy();
});

it("will not add an item with no value", () => {
  act(() => {
    render(<ToDoList />, container);
    const submitBtn = container.querySelector('#submit');
    submitBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(container.querySelector('#toDoList').children.length === 0).toBeTruthy();
});

it("can add an item", () => {
  act(() => {
    render(<ToDoList value="abc" />, container);
    const submitBtn = container.querySelector('#submit');
    submitBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(container.querySelector('#toDoList').children.length === 1).toBeTruthy();
});

it("will not add duplicates", () => {
  act(() => {
    render(<ToDoList list={['abc']} value="abc" />, container);
    const submitBtn = container.querySelector('#submit');
    submitBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(container.querySelector('#toDoList').children.length === 1).toBeTruthy();
});

it("can delete an item", () => {
  act(() => {
    render(<ToDoList list={['abc']} />, container);
    const item = container.querySelector('#toDoList').children[0];
    const button = item.querySelector('a');
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(container.querySelector('#toDoList').children.length === 0).toBeTruthy();
});