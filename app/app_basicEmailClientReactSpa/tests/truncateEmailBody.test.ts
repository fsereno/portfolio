"use strict;"

import { truncateEmailBody } from '../src/utils/truncateEmailBody';

describe("truncateEmailBody", () => {
    it("Should return a string of 10 characters when limit of 10 is passed", () => {
        const paragraph: string = `
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.`;

        const result:string = truncateEmailBody(paragraph, 10);

        expect(result.length).toEqual(10);
    });
    it("Should return the same string passed when less than the limit", () => {
        const paragraph: string = "Contrary";
        const result:string = truncateEmailBody(paragraph, 10);

        expect(result.length).toEqual(8);
    });
    it("Should return an empty string when nothing is passed", () => {
        const result:string = truncateEmailBody();
        expect(result.length).toEqual(0);
    });
});