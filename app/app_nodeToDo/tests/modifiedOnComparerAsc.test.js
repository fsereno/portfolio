"use strict;"

import { modifiedOnComparerDesc } from '../src/utils/modifiedOnComparerDesc';

describe("modifiedOnComparerAsc", () => {
    it("Should sort items in ascending order", () => {
        let items = [{ modifiedOn: 11111}, {modifiedOn: 22222}];
        items.sort(modifiedOnComparerDesc);
        expect(items[0].modifiedOn).toEqual(22222);
    });
    it("Should sort items in ascending order, including 0", () => {
        let items = [{ modifiedOn: 11111}, {modifiedOn: 22222}, {modifiedOn: 0}];
        items.sort(modifiedOnComparerDesc);
        expect(items[items.length - 1].modifiedOn).toEqual(0);
    });
    it("Should not error when no item has the modifiedOn field", () => {
        let items = [{ id: 1}, {id: 2}, {id: 3}];
        items.sort(modifiedOnComparerDesc);
        expect(items[0].id).toEqual(1);
        expect(items.length).toEqual(3);
    });
});