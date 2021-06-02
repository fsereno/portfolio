"use strict;"

import { expect } from 'chai';
import { modifiedOnComparerDesc } from '../src/utils/modifiedOnComparerDesc';

describe("modifiedOnComparerAsc", () => {
    it("Should sort items in ascending order", () => {
        let items = [{ modifiedOn: 11111}, {modifiedOn: 22222}];
        items.sort(modifiedOnComparerDesc);
        expect(items[0].modifiedOn).is.equal(22222);
    });
    it("Should sort items in ascending order, including 0", () => {
        let items = [{ modifiedOn: 11111}, {modifiedOn: 22222}, {modifiedOn: 0}];
        items.sort(modifiedOnComparerDesc);
        expect(items[items.length - 1].modifiedOn).is.equal(0);
    });
    it("Should not error when no item has the modifiedOn field", () => {
        let items = [{ id: 1}, {id: 2}, {id: 3}];
        items.sort(modifiedOnComparerDesc);
        expect(items[0].id).is.equal(1);
        expect(items.length).is.equal(3);
    });
});