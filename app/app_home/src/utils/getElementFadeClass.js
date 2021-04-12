"use strict;"

export const getElementFadeClass = (condition = false) => {
    let fadeClass = "fade-element";
    return condition ? `${fadeClass} in` : fadeClass;
}