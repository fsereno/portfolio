"use strict;"

import { expect } from 'chai';
import { XmlHttpRequestUtil } from '../../js/modules/utils/xmlHttpRequestUtil';

describe("xmlHttpRequestUtil", () => {
    describe("isDone", () => {
        it("Should return true when status is 200 and readyState is 4", () => {
            const result = XmlHttpRequestUtil.isDone(200, 4);
            expect(result).to.equal(true);
        });
    });
});