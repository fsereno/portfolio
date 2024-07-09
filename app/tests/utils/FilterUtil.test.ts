import { FilterUtil } from "../../typeScript/Utils/filterUtil/index";

describe("FilterUtil", () => {
    describe("IsUniqueInArray", () => {
        test("Should return true if value is unique in array", () => {
            let result = FilterUtil.isUniqueInArray(["a", "b", "c"], "d");
            expect(result).toBe(true);
        });
        test("Should return false if value is not unique in array", () => {
            let result = FilterUtil.isUniqueInArray(["a", "b", "c"], "a");
            expect(result).toBe(false);
        });
    });
});