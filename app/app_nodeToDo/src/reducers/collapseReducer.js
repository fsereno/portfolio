"use strict;"

import { COLLAPSE_STATE_HIDE, COLLAPSE_STATE_SHOW, HIDE, SHOW } from "../constants";

export function collapseReducer(state, action) {
    switch (action.type) {
        case SHOW:
            return COLLAPSE_STATE_SHOW
        case HIDE:
            return COLLAPSE_STATE_HIDE
        default:
            break;
    }
}