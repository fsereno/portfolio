
"use strict;"

import { addNavBarScrollDownClass } from './addNavBarScrollDownClass';

const handleNavBarScrollClass = () => {
    addNavBarScrollDownClass(window.scrollY === 0);
}

export const addNavbarTransScrollEventListener = () => {
    addNavBarScrollDownClass();
    window.addEventListener("scroll", handleNavBarScrollClass);
}