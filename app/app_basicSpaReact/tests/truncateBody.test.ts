"use strict;"

import { expect } from 'chai';
import { truncateBody } from '../src/utils/truncateBody';

describe("truncateBody", () => {
    it("Should return a string of 10 characters when limit of 10 is passed", () => {
        const paragraph: string = `
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.`;

        const result:string = truncateBody(paragraph, 10);

        expect(result.length).to.equal(10);
    });
    it("Should return the same string passed when less than the limit", () => {
        const paragraph: string = "Contrary";
        const result:string = truncateBody(paragraph, 10);

        expect(result.length).to.equal(8);
    });
    it("Should return an empty string when nothing is passed", () => {
        const result:string = truncateBody();
        expect(result.length).to.equal(0);
    });
});