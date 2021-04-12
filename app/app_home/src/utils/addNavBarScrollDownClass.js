"use strict;"

import { NAVBAR_SCROLL_DOWN_CLASS, NAV_ID } from "../constants";

export const addNavBarScrollDownClass = (condition = true) => {
    let navbar = document.getElementById(NAV_ID);
    if (condition) {
        navbar.classList.remove(NAVBAR_SCROLL_DOWN_CLASS);
    } else {
        navbar.classList.add(NAVBAR_SCROLL_DOWN_CLASS);
    }
}