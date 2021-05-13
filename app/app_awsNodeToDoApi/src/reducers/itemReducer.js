"use strict;"

import { COPY, DESCRIPTION } from "../constants";

export function itemReducer(state, action) {
    switch (action.type) {
        case DESCRIPTION:
            return {
                ...state,
                description: action.value
            }
        case COPY:
            return {
                ...action.value
            }
        default:
            break;
    }
}