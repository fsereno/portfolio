import { expect } from "chai";
import { ContactFilterModule } from "../../typeScript/Modules/contactFilterModule/app";

let sut:ContactFilterModule = null;

describe("ContactFilterModule", () => {
    beforeEach( () => sut = new ContactFilterModule());
    describe("filterNonNumerics", () => {
        it("Should only return numeric values", () => {
            let result = sut.filterNonNumerics("+(44) 78965 67654");
            expect(result).to.equal("447896567654");
        });
    });
});