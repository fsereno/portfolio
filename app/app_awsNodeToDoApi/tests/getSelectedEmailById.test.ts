"use strict;"

import { expect } from 'chai';
import { getSelectedEmailById } from '../src/utils/getSelectedEmailById';

describe("getSelectedEmailById", () => {
    it("Should return the object of id 1 when 1 is passed as id", () => {
        const inbox = [ { id: 0 }, { id: 1 } ];
        const result = getSelectedEmailById(inbox, 1);
        expect(result.id).to.equal(1);
    });
    it("Should return the first object if no id is passed", () => {
        const inbox = [ { id: 0 }, { id: 1 } ];
        const result = getSelectedEmailById(inbox);
        expect(result.id).to.equal(0);
    });
});