/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { mount } from 'enzyme';
 import CoffeeMakerApp from '../src/coffeeMakerApp';

 beforeEach(() => {});
 afterEach(() => {});

 it("renders", () => {
   const wrapper = mount(<CoffeeMakerApp />);
   const runSync = wrapper.exists('#runSync');
   const runAsync = wrapper.exists('#runAsync');
   const modal = wrapper.exists('#puzzleModal');
   expect(runSync && runAsync && modal).toEqual(true);
 });

 it("solves the puzzle correctly", () => {
    const wrapper = mount(<CoffeeMakerApp />);
    const puzzleForm = wrapper.find('#puzzleModal form');
    const puzzleInput = puzzleForm.find('#answerInput');
    puzzleInput.simulate('change', { target: { value: 5 } });
    puzzleForm.simulate('submit');
    console.log(wrapper.debug());
 });
