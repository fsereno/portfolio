"use strict;"

import { expect } from 'chai';
import { getDisplayAge } from '../src/utils/getDisplayAge';

describe("getDisplayAge", () => {
    it("Should return 'today' when nothing is passed", () => {
        const result = getDisplayAge();
        expect(result).to.equal("today")
    });
    it("Should return a 'today' when 0 is passed", () => {
        const result = getDisplayAge(0);
        expect(result).to.equal("today")
    });
    it("Should return a 'day ago' when 1 is passed", () => {
        const result = getDisplayAge(1);
        expect(result).to.equal("1 day ago")
    });
    it("Should return a 'days ago' when 2 is passed", () => {
        const result = getDisplayAge(2);
        expect(result).to.equal("2 days ago")
    });
});