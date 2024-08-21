"use strict;"

import { HIDE, SHOW } from '../src/constants';
import { collapseReducer } from '../src/reducers/collapseReducer';

describe("collapseReducer", () => {
    it("Should return show state when SHOW is passed", () => {
        const state = { show: false, text: "Show", class: "bi-plus-square" };
        const result = collapseReducer( state, { type: SHOW } );
        expect(result.show).toEqual(true);
        expect(result.text).toEqual("Hide");
        expect(result.class).toEqual("bi-dash-square");
    });
    it("Should return show state when SHOW is passed", () => {
        const state = { show: true, text: "Hide", class: "bi-dash-square" };
        const result = collapseReducer( state, { type: HIDE } );
        expect(result.show).toEqual(false);
        expect(result.text).toEqual("Show");
        expect(result.class).toEqual("bi-plus-square");
    });
});