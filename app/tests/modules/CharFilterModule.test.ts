import { expect } from "chai";
import { CharFilterModule } from "../../typeScript/Modules/charFilterModule/app";

let sut:CharFilterModule = null;

describe("CharFilterModule", () => {

    beforeEach( () => sut = new CharFilterModule());

    describe("filter", () => {
        it("Should only return numeric values", () => {
            let result = sut.filter("+(44) 78965 67654", /[0-9]/);
            expect(result).to.equal("447896567654");
        });
        it("Should only return passed values with no whitespaces", () => {
            let result = sut.filter("MK40 6UH", /\w/);
            expect(result).to.equal("MK406UH");
        });
    });
});