"use strict;"

import { XMLHttpRequestUtil } from '../../js/modules/utils/xmlHttpRequestUtil';

describe("XMLHttpRequestUtil", () => {
    describe("isDone", () => {
        test("Should return true when status is 200 and readyState is 4", () => {
            const result = XMLHttpRequestUtil.isDone(200, 4);
            expect(result).toBe(true);
        });
        test("Should return false when status is not 200 and readyState is 4", () => {
            const result = XMLHttpRequestUtil.isDone(400, 4);
            expect(result).toBe(false);
        });
        test("Should return false when status is 200 but readyState not 4", () => {
            const result = XMLHttpRequestUtil.isDone(200, 0);
            expect(result).toBe(false);
        });
    });
    describe("isFail", () => {
        test("Should return true when status not 200 and readyState is 4", () => {
            const result = XMLHttpRequestUtil.isFail(0, 4);
            expect(result).toBe(true);
        });
        test("Should return false when status is 200 and readyState is 4", () => {
            const result = XMLHttpRequestUtil.isFail(200, 4);
            expect(result).toBe(false);
        });
        test("Should return false when status is not 200 but readyState not 4", () => {
            const result = XMLHttpRequestUtil.isFail(400, 0);
            expect(result).toBe(false);
        });
    });
});