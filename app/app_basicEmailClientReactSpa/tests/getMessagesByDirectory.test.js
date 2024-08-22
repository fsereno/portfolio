"use strict;"

import { getMessagesByDirectory } from '../src/utils/getMessagesByDirectory';

describe("getMessagesByDirectory", () => {
    it("Should return an empty array when directory does not exist", () => {
        const messages = [ { dir: "A" }, { dir: "B" }, { dir: "C" } ];
        const result = getMessagesByDirectory(messages, "D");
        expect(result.length).toEqual(0);
    });
    it("Should return an empty array when property does not exist", () => {
        const messages = [ { directory: "A" }, { directory: "B" }, { directory: "C" } ];
        const result = getMessagesByDirectory(messages, "D");
        expect(result.length).toEqual(0);
    });
    it("Should return an array length of 2 when correct directory is passed", () => {
        const messages = [ { dir: "A" }, { dir: "A" }, { dir: "B" } ];
        const result = getMessagesByDirectory(messages, "A");
        expect(result.length).toEqual(2);
    });
});