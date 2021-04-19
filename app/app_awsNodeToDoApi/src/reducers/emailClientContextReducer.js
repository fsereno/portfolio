"use strict;"

import { getReplyToEmailAddress } from '../utils/getReplyToEmailAddress';
import {
    SELECT,
    DESELECT_THREAD,
    REPLY_MESSAGE,
    NEW_MESSAGE,
    READ,
    REPLY,
    MY_ADDRESS,
    RESET_MODE
} from '../constants';

export function EmailClientContextReducer(state, action) {
    switch (action.type) {
        case SELECT:
            return {
                selectedThread: action.thread,
                selected: {
                    ...state.selected,
                    id: action.item.id,
                    to: action.item.to,
                    from: action.item.from,
                    subject: action.item.subject,
                    time: action.item.time
                },
                mode: READ
            }
        case DESELECT_THREAD:
            return {
                ...state,
                selected: {
                    id: -1,
                    to: "",
                    from: "",
                    subject: "",
                    body: "",
                },
                selectedThread: [],
                mode: ""
            }
        case REPLY_MESSAGE:
            return {
                ...state,
                mode: REPLY,
                selected: {
                    ...state.selected,
                    to: getReplyToEmailAddress(action.selected.from, action.selected.to),
                    from: MY_ADDRESS,
                    subject: action.selected.subject
                }
            }
        case NEW_MESSAGE:
            return {
                ...state,
                selectedThread: [],
                mode: NEW_MESSAGE
            }
        case RESET_MODE:
            return {
                ...state,
                mode: ""
            }
        default:
            throw new Error();
    }
}