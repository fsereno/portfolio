import { expect } from "chai";
import { ApplicationSortUtil } from "../../typeScript/Utils/applicationsSortUtil/index";
import { Application } from '../../typeScript/Models/Application';

let applications: Application[] = [];

describe("ApplicationSortUtil", () => {

    beforeEach(() => {
        applications = [
            new Application(10),
            new Application(2),
            new Application(1),
            new Application(5),
        ]
    });

    describe("Sorter", () => {
        it("Should return sorted array or applications", () => {

            applications.sort(ApplicationSortUtil.Sorter);

            expect(applications[0].order).to.equal(1);
            expect(applications[1].order).to.equal(2);
            expect(applications[2].order).to.equal(5);
            expect(applications[3].order).to.equal(10);
        });
    });
});