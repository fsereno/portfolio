"use strict;"

import { setEmailToRead } from '../utils/setEmailToRead';
import { getSelectedEmailById } from '../utils/getSelectedEmailById';
import { SELECT, DESELECT, REPLY, SUBMIT, NEW_MESSAGE } from '../globalConstants';

export function reducer(state, action) {
    switch(action.type) {
      case SELECT:
        return {
          messages: setEmailToRead(action.id, state.messages),
          selected: getSelectedEmailById(state.messages, action.id),
          isSelected: true,
          isReply: false
        }
      case REPLY:
        return {
          ...state,
          isReply: true
        }
      case SUBMIT:

        const messages = [ ...state.messages ];

        messages.unshift(action.selected);

        return {
          ...state,
          messages,
          selected: {},
          isSelected: false
        }
      case DESELECT:
        return {
          ...state,
          selected: {},
          isSelected: false
        }
        case NEW_MESSAGE:
          return {
            ...state,
            selected: {},
            isSelected: true,
            isReply: true
          }
      default:
        throw new Error();
    }
  }