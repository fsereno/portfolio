import { expect } from "chai";
import { RandomGeneratorService } from "../../typeScript/Services/RandomGeneratorService";
import { StringService } from "../../typeScript/Services/StringService";
import { StringRepository } from "../../typeScript/Repositories/StringRepository";

describe("RandomGeneraterService", () => {
    describe("GenerateRandom", () => {
        it("Should return a random string of length 10, if criteria = string[] and length = 10", () => {
            let stringRepository = new StringRepository(),
                stringService = new StringService(stringRepository),
                randomGeneratorService = new RandomGeneratorService(
                    stringService),
                alpha = stringService.Alphas,
                numeric = stringService.Numerics,
                criteria = [alpha, numeric],
                result = randomGeneratorService.GenerateRandomString(criteria, 10);

            expect(result).is.not.null;
            expect(result).is.string;
            expect(result.length).to.equal(10);
        });
    });
    describe("Generate", () => {
        it("Should return a random number of between 0 and 10, when target is = 10", () => {
            let stringRepository = new StringRepository(),
                stringService = new StringService(stringRepository),
                randomGeneratorService = new RandomGeneratorService(
                    stringService),

                result = randomGeneratorService.Generate(10);

            expect(result).is.not.null;
            expect(result).is.greaterThan(-1);
            expect(result).is.lessThan(11);
        });
    });
});