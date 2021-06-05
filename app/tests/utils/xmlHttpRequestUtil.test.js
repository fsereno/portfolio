"use strict;"

import { expect } from 'chai';
import { XMLHttpRequestUtil } from '../../js/modules/utils/xmlHttpRequestUtil';

describe("XMLHttpRequestUtil", () => {
    describe("isDone", () => {
        it("Should return true when status is 200 and readyState is 4", () => {
            const result = XMLHttpRequestUtil.isDone(200, 4);
            expect(result).to.equal(true);
        });
        it("Should return false when status is not 200 and readyState is 4", () => {
            const result = XMLHttpRequestUtil.isDone(400, 4);
            expect(result).to.equal(false);
        });
        it("Should return false when status is 200 but readyState not 4", () => {
            const result = XMLHttpRequestUtil.isDone(200, 0);
            expect(result).to.equal(false);
        });
    });
    describe("isFail", () => {
        it("Should return true when status not 200 and readyState is 4", () => {
            const result = XMLHttpRequestUtil.isFail(0, 4);
            expect(result).to.equal(true);
        });
        it("Should return false when status is 200 and readyState is 4", () => {
            const result = XMLHttpRequestUtil.isFail(200, 4);
            expect(result).to.equal(false);
        });
        it("Should return false when status is not 200 but readyState not 4", () => {
            const result = XMLHttpRequestUtil.isFail(400, 0);
            expect(result).to.equal(false);
        });
    });
});