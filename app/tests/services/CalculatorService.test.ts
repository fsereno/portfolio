import { expect } from "chai";
import { CalculatorService } from "../../typeScript/Services/CalculatorService";

describe("Calculator", () => {
    describe("Add", () => {
        it("Should return 3 when a = 1 and b = 2", () => {
            let calculatorService = new CalculatorService(),
                result = calculatorService.Add(1,2);

            expect(result).to.equal(3);
        });
    });
    describe("PercentageOf", () => {
        it("Should return 125 when percent = 50 and ofThisNumber = 250", () => {
            let calculatorService = new CalculatorService(),
                result = calculatorService.PercentageOf(50,250);

            expect(result).to.equal(125);
        });
    })
});