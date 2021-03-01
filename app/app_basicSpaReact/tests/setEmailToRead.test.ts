"use strict";

import { expect } from 'chai';
import { setEmailToRead } from '../src/utils/setEmailToRead';

describe("setEmailToRead", () => {
    it("Should return an array where 0 index read is true", () => {
        const context = {
            inbox: [ { id: 0, read: false }, { id: 1, read: false } ]
        }
        let result = setEmailToRead(0, context);
        expect(result[0].read).to.equal(true);
    });
    it("Should return an array where 0 index read is false", () => {
        const context = {
            inbox: [ { id: 0, read: true }, { id: 1, read: true } ]
        }
        let result = setEmailToRead(0, context, false);
        expect(result[0].read).to.equal(false);
    });
});