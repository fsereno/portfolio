/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow, mount, render } from 'enzyme';
import ToDoList from '../src/toDoList';

beforeEach(() => {});
afterEach(() => {});

it("renders", () => {
  const wrapper = mount(<ToDoList />);
  expect(wrapper.find('#toDoList')).toBeTruthy();
});

it("will not add an item with no value", () => {
  const wrapper = mount(<ToDoList />);
  const submitBtn = wrapper.find('button#submit');
  submitBtn.simulate('click');
  expect(wrapper.find('ul#toDoList').children()).toHaveLength(0);
});

// this needs fixing
/*it("can add an item", () => {
  const wrapper = mount(<ToDoList />);
  const input = wrapper.find('input#itemInput');
  input.simulate('change', { target: { value: 'abc'} } );
  const submitBtn = wrapper.find('button#submit');
  submitBtn.simulate('click');
  expect(wrapper.find('ul#toDoList').children()).toHaveLength(1);
});*/
