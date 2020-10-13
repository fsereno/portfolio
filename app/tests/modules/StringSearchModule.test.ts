import { expect } from "chai";
import { StringSearchModule } from "../../typeScript/Modules/stringSearchModule/app";

describe("StringSearchModule", () => {
    describe("searchCriterions", () => {
        it("Should return true when search term is exists in criterions array", () => {
            let sut = new StringSearchModule();
            let criterions = [
                "TypeScript",
                "JavaScript",
                "React",
                ".Net Core"
            ];
            let result = sut.searchCriterions(criterions, "React")
            expect(result).to.equal(true);
        });
    });
});