import { expect } from "chai";
import { TimerService } from "../../typeScript/Services/TimerService";

describe("TimerService", () => {
    describe("Start", () => {
        it("Should throw an error", () => {
            let sut = new TimerService(5, "timer"),
                result = sut.Start();
            expect(result).to.eventually.equal("Done");
        });
    });
});