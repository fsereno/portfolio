import { expect } from "chai";
import { FilterUtil } from "../../typeScript/Utils/filterUtil/app";

describe("FilterUtil", () => {
    describe("IsUniqueInArray", () => {
        it("Should return true if value is unique in array", () => {
            let result = FilterUtil.isUniqueInArray(["a", "b", "c"], "d");
            expect(result).to.equal(true);
        });
        it("Should return false if value is not unique in array", () => {
            let result = FilterUtil.isUniqueInArray(["a", "b", "c"], "a");
            expect(result).to.equal(false);
        });
    });
});