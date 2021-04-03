"use strict;"

import { expect } from 'chai';
import { getRandomInt } from '../../js/modules/utils/randomUtil';

describe("randomUtil", () => {
    describe("getRandomInt", () => {
        it("Should return a number between 1 and 3.", () => {
            const randomInt = getRandomInt(1, 3);
            const result = randomInt === 1 || randomInt === 2 || randomInt === 3;
            expect(result).to.equal(true);
        });
        it("Should return a number between 0 and 2.", () => {
            const randomInt = getRandomInt(0, 2);
            const result = randomInt === 0 || randomInt === 1 || randomInt === 2;
            expect(result).to.equal(true);
        });
        it("Should not error when nothing is passed.", () => {
            const randomInt = getRandomInt();
            expect(randomInt).to.equal(0)
        });
    });
});