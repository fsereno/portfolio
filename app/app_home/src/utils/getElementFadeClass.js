"use strict;"

export const getElementFadeClass = (condition = false) => {
    const fadeClass = "fade-element";
    const action = condition ? "in" : "out";
    return `${fadeClass} ${action}`;
}