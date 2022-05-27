"use strict;"

import { expect } from 'chai';
import { getEmailDisplayAge } from '../src/utils/getEmailDisplayAge';

describe("getEmailDisplayAge", () => {
    it("Should return 'today' when nothing is passed", () => {
        const result = getEmailDisplayAge();
        expect(result).to.equal("today")
    });
    it("Should return a 'today' when 0 is passed", () => {
        const result = getEmailDisplayAge(0);
        expect(result).to.equal("today")
    });
    it("Should return a 'day ago' when 1 is passed", () => {
        const result = getEmailDisplayAge(1);
        expect(result).to.equal("1 day ago")
    });
    it("Should return a 'days ago' when 2 is passed", () => {
        const result = getEmailDisplayAge(2);
        expect(result).to.equal("2 days ago")
    });
});