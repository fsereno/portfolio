"use strict";

import { setEmailToRead } from '../src/utils/setEmailToRead';

describe("setEmailToRead", () => {
    it("Should return an array where 0 index read is true", () => {
        const inbox = [ { id: 0, read: false }, { id: 1, read: false } ];
        const result = setEmailToRead(0, inbox);
        expect(result[0].read).toEqual(true);
    });
    it("Should return an array where 0 index read is false", () => {
        const inbox = [ { id: 0, read: true }, { id: 1, read: true } ];
        const result = setEmailToRead(0, inbox, false);
        expect(result[0].read).toEqual(false);
    });
});