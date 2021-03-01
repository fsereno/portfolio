import { expect } from "chai";
import { utilTest } from '../src/utils/utilTest';

describe("utilTest", () => {
    it("Should return true", () => {
        let result = utilTest();
        expect(result).to.equal(true);
    });
});