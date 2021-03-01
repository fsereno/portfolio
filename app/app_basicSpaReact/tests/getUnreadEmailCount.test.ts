"use strict;"

import { expect } from 'chai';
import { getUnreadEmailCount } from '../src/utils/getUnreadEmailCount';

describe("getUnreadEmailCount", () => {
    it("Should return 0 when passed empty array", () => {
        const result = getUnreadEmailCount();
        expect(result).to.equal(0);
    });
    it("Should return 1 when array passed has 1 unread", () => {
        const conext = { inbox: [ { read: false } ] };
        const result = getUnreadEmailCount(conext);
        expect(result).to.equal(1);
    });
    it("Should return 1 when array passed has 1 unread and 1 read", () => {
        const conext = { inbox: [ { read: false }, { read: true } ] };
        const result = getUnreadEmailCount(conext);
        expect(result).to.equal(1);
    });
    it("Should return 0 when array passed has all read", () => {
        const conext = { inbox: [ { read: true }, { read: true } ] };
        const result = getUnreadEmailCount(conext);
        expect(result).to.equal(0);
    });
});