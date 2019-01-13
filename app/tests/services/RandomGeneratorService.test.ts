import { expect } from "chai";
import { RandomGeneratorService } from "../../typeScript/Services/RandomGeneratorService";
import { StringService } from "../../typeScript/Services/StringService";
import { RandomGeneratorRepository } from "../../typeScript/Repositories/RandomGeneratorRepository";

describe("RandomGeneraterService", () => {
    describe("GenerateRandom", () => {
        it("Should return a random string of length 10, if criteria = string[] and length = 10", () => {
            let randomGeneratorRepository = new RandomGeneratorRepository(),
                stringService = new StringService(),
                randomGeneratorService = new RandomGeneratorService(
                    stringService, 
                    randomGeneratorRepository
                    ),
                alpha = randomGeneratorService.Alphas,
                numeric = randomGeneratorService.Numerics,
                criteria = [alpha, numeric],
                result = randomGeneratorService.GenerateRandomString(criteria, 10);

            expect(result).is.not.null;
            expect(result).is.string;
            expect(result.length).to.equal(10);
        });
    });
    describe("Generate", () => {
        it("Should return a random number of between 0 and 10, when target is = 10", () => {
            let randomGeneratorRepository = new RandomGeneratorRepository(),
                stringService = new StringService(),
                randomGeneratorService = new RandomGeneratorService(
                    stringService, 
                    randomGeneratorRepository
                    ),

                result = randomGeneratorService.Generate(10);

            expect(result).is.not.null;
            expect(result).is.greaterThan(-1);
            expect(result).is.lessThan(11);
        });
    });
});