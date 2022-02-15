/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { mount } from 'enzyme';
 import CoffeeMakerComponent from '../src/coffeeMakerComponent';

 beforeEach(() => {});
 afterEach(() => {});

 it("renders with no log", () => {
   const wrapper = mount(<CoffeeMakerComponent log={[]}/>);
   const runSync = wrapper.exists('#runSync');
   const runAsync = wrapper.exists('#runAsync');
   const isNoProcessHeading = !wrapper.text().includes('Log of tasks carried out');
   expect(runSync && runAsync && isNoProcessHeading).toEqual(true);
 });
