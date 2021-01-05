import { expect } from "chai";
import { FilterModule } from "../../typeScript/Modules/filterModule/app";

describe("FilterModule", () => {
    describe("filterInputOnRegex", () => {
        it("Should only return numeric values", () => {
            let result = FilterModule.filterInputOnRegex("+(44) 78965 67654", /[0-9]/);
            expect(result).to.equal("447896567654");
        });
        it("Should only return passed values with no whitespaces", () => {
            let result = FilterModule.filterInputOnRegex("MK40 6UH", /\w/);
            expect(result).to.equal("MK406UH");
        });
    });
    describe("IsUniqueInArray", () => {
        it("Should return true if value is unique in array", () => {
            let result = FilterModule.IsUniqueInArray(["a", "b", "c"], "d");
            expect(result).to.equal(true);
        });
        it("Should return false if value is not unique in array", () => {
            let result = FilterModule.IsUniqueInArray(["a", "b", "c"], "a");
            expect(result).to.equal(false);
        });
    });
});