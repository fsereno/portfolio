import { getElementFadeClass } from "../../js/modules/utils/getElementFadeClass";

describe("getElementFadeClass", () => {
    test("Should return the fade in class when the condition is true", () => {
        const result = getElementFadeClass(true);
        expect(result).toBe("fade-element in");
    });
    test("Should return the fade out class when the condition is false", () => {
        const result = getElementFadeClass(false);
        expect(result).toBe("fade-element out");
    });
})