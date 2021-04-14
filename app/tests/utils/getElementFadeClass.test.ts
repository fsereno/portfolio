"use strict;"

import { expect } from "chai";
import { getElementFadeClass } from "../../js/modules/utils/getElementFadeClass";

describe("getElementFadeClass", () => {
    it("Should return the fade in class when the condition is true", () => {
        const result = getElementFadeClass(true);
        expect(result).to.equal("fade-element in");
    });
    it("Should return the fade out class when the condition is false", () => {
        const result = getElementFadeClass(false);
        expect(result).to.equal("fade-element out");
    });
})