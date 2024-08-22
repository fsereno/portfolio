"use strict;"

import { getReplyToEmailAddress } from '../src/utils/getReplyToEmailAddress';
import { MY_ADDRESS } from '../src/constants';

describe("getToEmailAddress", () => {
    it("Should return the from address when to matches the default address", () => {
        const selected = { id: 0, from: "joe@bloggs.co.uk", to: MY_ADDRESS };
        const result = getReplyToEmailAddress(selected.from, selected.to);
        expect(result).toEqual("joe@bloggs.co.uk");
    });
    it("Should return the to address when to does not match the default address", () => {
        const selected = { id: 0, from: MY_ADDRESS, to: "tim.jones@hmrc.co.uk" };
        const result = getReplyToEmailAddress(selected.from, selected.to);
        expect(result).toEqual("tim.jones@hmrc.co.uk");
    });
});