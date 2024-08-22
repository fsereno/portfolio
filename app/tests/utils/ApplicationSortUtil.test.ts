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
        test("Should return sorted array of applications", () => {

            applications.sort(ApplicationSortUtil.sorter);

            expect(applications[0].order).toBe(1);
            expect(applications[1].order).toBe(2);
            expect(applications[2].order).toBe(5);
            expect(applications[3].order).toBe(10);
        });
        test("Should return sorted array of applications, with null orders last", () => {

            let applications = [
                new Application(10),
                new Application(undefined),
                new Application(undefined),
                new Application(5),
            ]

            applications.sort(ApplicationSortUtil.sorter);

            expect(applications[0].order).toBe(5);
            expect(applications[1].order).toBe(10);
            expect(applications.length).toBe(4);
        });
    });
});