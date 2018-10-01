import { expect } from "chai";
import { ValidatorService } from "../../typeScript/Services/ValidatorService";

describe("ValidatorService", () => {
    describe("validateForm", () => {
        it("Should return something", () => {
            let validatorService = new ValidatorService();
            let options;
            let result = validatorService.ValidateForm("formId", options);
            expect(result).to.be.an('object');
        });
    });
});