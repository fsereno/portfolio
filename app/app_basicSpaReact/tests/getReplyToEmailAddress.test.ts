"use strict;"

import { expect } from 'chai';
import { getReplyToEmailAddress } from '../src/utils/getReplyToEmailAddress';
import { MY_ADDRESS } from '../src/globalConstants';

describe("getToEmailAddress", () => {
    it("Should return the from address when to matches the default address", () => {
        const selected = { id: 0, from: "joe@bloggs.co.uk", to: MY_ADDRESS };
        const result = getReplyToEmailAddress(selected);
        expect(result).to.equal("joe@bloggs.co.uk");
    });
    it("Should return the to address when to does not match the default address", () => {
        const selected = { id: 0, from: MY_ADDRESS, to: "tim.jones@hmrc.co.uk" };
        const result = getReplyToEmailAddress(selected);
        expect(result).to.equal("tim.jones@hmrc.co.uk");
    });
});