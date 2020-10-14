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
        it("Should return true when there are multiple search terms exist", () => {
            let sut = new StringSearchModule();
            let criterions = [
                "TypeScript",
                "JavaScript",
                "React",
                ".Net Core"
            ];
            let result = sut.searchCriterions(criterions, "Basic TypeScript")
            expect(result).to.equal(true);
        });
        it("Should return true when matching on different case", () => {
            let sut = new StringSearchModule();
            let criterions = [
                "TypeScript",
                "JavaScript",
                "React",
                ".Net Core"
            ];
            let result = sut.searchCriterions(criterions, "typescript")
            expect(result).to.equal(true);
        });
        it("Should return false when search term are empty", () => {
            let sut = new StringSearchModule();
            let criterions = [];
            let result = sut.searchCriterions(criterions, "React")
            expect(result).to.equal(false);
        });
    });
});