"use strict;"

import { HIDE, SHOW } from "../constants";

export function collapseReducer(state, action) {
    switch (action.type) {
        case SHOW:
            return {
                show: true,
                text: "Show",
                class: "bi-plus-square"
            }
        case HIDE:
            return {
                show: false,
                text: "Hide",
                class: "bi-dash-square"
            }
        default:
            break;
    }
}