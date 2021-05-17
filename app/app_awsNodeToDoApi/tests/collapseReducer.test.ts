"use strict;"

import { expect } from 'chai';
import { HIDE, SHOW } from '../src/constants';
import { collapseReducer } from '../src/reducers/collapseReducer';

describe("collapseReducer", () => {
    it("Should return show state when SHOW is passed", () => {
        const state = { show: false, text: "Hide", class: "bi-dash-square" };
        const result = collapseReducer( state, { type: SHOW } );
        expect(result.show).is.equal(true);
        expect(result.text).is.equal("Show");
        expect(result.class).is.equal("bi-plus-square");
    });
    it("Should return show state when SHOW is passed", () => {
        const state = { show: true, text: "Show", class: "bi-plus-square" };
        const result = collapseReducer( state, { type: HIDE } );
        expect(result.show).is.equal(false);
        expect(result.text).is.equal("Hide");
        expect(result.class).is.equal("bi-dash-square");
    });
});