import { expect } from "chai";
import { StringSearchModule } from "../../typeScript/Modules/stringSearchModule/app";

let sut:StringSearchModule = null;

describe("StringSearchModule", () => {
    beforeEach( () => sut = new StringSearchModule());
    describe("searchCriterions", () => {
        it("Should return true when search term is exists in criterions array", () => {
            let criterions = [
                "TypeScript",
                "JavaScript",
                "React",
                ".NET Core"
            ];
            let result = sut.searchCriterions(criterions, "React")
            expect(result).to.equal(true);
        });
        it("Should return true when there are multiple search terms exist", () => {
            let criterions = [
                "TypeScript",
                "JavaScript",
                "React",
                ".NET Core"
            ];
            let result = sut.searchCriterions(criterions, "Basic TypeScript")
            expect(result).to.equal(true);
        });
        it("Should return true when matching on different case", () => {
            let criterions = [
                "TypeScript",
                "JavaScript",
                "React",
                ".NET Core"
            ];
            let result = sut.searchCriterions(criterions, "typescript")
            expect(result).to.equal(true);
        });
        it("Should return false when search term are empty", () => {
            let criterions = [];
            let result = sut.searchCriterions(criterions, "React")
            expect(result).to.equal(false);
        });
    });
    describe("searchDoesNotExist", () => {
        it("Should return false if params are empty", () => {
            let result = sut.searchDoesNotExist();
            expect(result).to.equal(false);
        });
        it("Should return false if search term already exists", () => {
            let result = sut.searchDoesNotExist("React", "React");
            expect(result).to.equal(false);
        });
        it("Should return true if search term does not already exist", () => {
            let result = sut.searchDoesNotExist("Vue", "React");
            expect(result).to.equal(true);
        });
        it("Should return false and ignore case difference", () => {
            let result = sut.searchDoesNotExist("typescript", "TypeScript");
            expect(result).to.equal(false);
        });
    })
    describe("combineSearchTerms", () => {
        it("Should return an empty string if params are empty", () => {
            let result = sut.combineSearchTerms();
            expect(result).to.equal("");
        });
        it("Should return both existing and current search terms", () => {
            let result = sut.combineSearchTerms("React", ".NET Core");
            expect(result).to.equal("React .NET Core");
        });
        it("Should return only existing if current search term is empty", () => {
            let result = sut.combineSearchTerms("React");
            expect(result).to.equal("React");
        });
    })
});