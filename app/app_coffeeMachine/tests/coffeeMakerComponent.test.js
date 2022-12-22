/**
 * @jest-environment jsdom
 */

import React from "react";
import { mount } from 'enzyme';
import CoffeeMakerComponent from '../src/coffeeMakerComponent';

beforeEach(() => { });
afterEach(() => { });

it("renders with no log", () => {
  const wrapper = mount(<CoffeeMakerComponent log={[]} />);
  const runSync = wrapper.exists('#runSync');
  const runAsync = wrapper.exists('#runAsync');
  const isNoProcessHeading = !wrapper.text().includes('Log of tasks carried out');
  expect(runSync && runAsync && isNoProcessHeading).toEqual(true);
});

it("renders with a log", () => {
  const wrapper = mount(<CoffeeMakerComponent log={[
    { detail: "Value 1" }
  ]} />);
  const valueExists = wrapper.text().includes('Value 1');
  const isNoProcessHeading = wrapper.text().includes('Log of tasks carried out');
  expect(isNoProcessHeading && valueExists).toEqual(true);
});

it("renders when RunSync is clicked", () => {
  const wrapper = mount(<CoffeeMakerComponent log={[]} handleRun={() => {
    wrapper.setProps( {
      log: [
        { detail: "Value 1" }
      ]}
    )}} />);
  const runSync = wrapper.find('#runSync');
  runSync.simulate('click');
  const valueExists = wrapper.text().includes('Value 1');
  const isNoProcessHeading = wrapper.text().includes('Log of tasks carried out');
  expect(isNoProcessHeading && valueExists).toEqual(true);
});

it("renders when RunAsync is clicked", () => {
  const wrapper = mount(<CoffeeMakerComponent log={[]} handleRunAsync={() => {
    wrapper.setProps( {
      log: [
        { detail: "Value 1" }
      ]}
    )}} />);
  const runAsync = wrapper.find('#runAsync');
  runAsync.simulate('click');
  const valueExists = wrapper.text().includes('Value 1');
  const isNoProcessHeading = wrapper.text().includes('Log of tasks carried out');
  expect(isNoProcessHeading && valueExists).toEqual(true);
});
