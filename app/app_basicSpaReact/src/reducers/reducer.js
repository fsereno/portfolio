"use strict;"

import { setEmailToRead } from '../utils/setEmailToRead';
import { getSelectedEmailById } from '../utils/getSelectedEmailById';
import { SELECT, DESELECT, REPLY } from '../globalConstants';

export function reducer(state, action) {
    switch(action.type) {
      case SELECT:
        return {
          inbox: setEmailToRead(action.id, state.inbox),
          selected: getSelectedEmailById(state.inbox, action.id),
          isSelected: true,
          isReply: false
        }
        case REPLY:
          return {
            ...state,
            isReply: true
          }
      case DESELECT:
        return {
          ...state,
          selected: {},
          isSelected: false
        }
      default:
        throw new Error();
    }
  }