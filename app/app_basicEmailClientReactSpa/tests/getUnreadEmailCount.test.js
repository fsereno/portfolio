"use strict;"

import { expect } from 'chai';
import { getUnreadEmailCount } from '../src/utils/getUnreadEmailCount';

describe("getUnreadEmailCount", () => {
    it("Should return 0 when passed empty array", () => {
        const result = getUnreadEmailCount();
        expect(result).to.equal(0);
    });
    it("Should return 1 when array passed has 1 unread", () => {
        const inbox = [ { read: false, dir: "A" }, { read: false, dir: "B" } ];
        const result = getUnreadEmailCount(inbox, "A");
        expect(result).to.equal(1);
    });
    it("Should return 1 when array passed has 1 unread and 1 read", () => {
        const inbox = [ { read: false, dir: "A" }, { read: true, dir: "A" } ];
        const result = getUnreadEmailCount(inbox, "A");
        expect(result).to.equal(1);
    });
    it("Should return 0 when array passed has all read", () => {
        const inbox = [ { read: true, dir: "A" }, { read: true, dir: "A" } ];
        const result = getUnreadEmailCount(inbox, "A");
        expect(result).to.equal(0);
    });
});