import { expect } from "chai";
import CalculatorService from "../typeScript/Services/CalculatorService";

describe("Calculator", () => {
    describe("Add", () => {
        it("Should return 3 when a = 1 and b = 2", () => {
            let calc = new CalculatorService();

            var result = calc.Add(1,2);

            expect(result).to.equal(3);
        });
    })
});