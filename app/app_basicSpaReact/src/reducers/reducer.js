"use strict;"

import { setEmailToRead } from '../utils/setEmailToRead';
import { getSelectedEmailById } from '../utils/getSelectedEmailById';
import { getEmailsByThread } from '../utils/getEmailsByThread';
import { SELECT, DESELECT, REPLY, SUBMIT, NEW_MESSAGE, READ } from '../globalConstants';

export function reducer(state, action) {
    switch(action.type) {
      case SELECT:
        return {
          messages: setEmailToRead(action.selected.id, state.messages),
          selected: getEmailsByThread(state.messages, action.selected),
          showModal: true,
          mode: READ
        }
      case REPLY:
        return {
          ...state,
          mode: REPLY
        }
      case SUBMIT:

        const messages = [ ...state.messages ];

        messages.unshift(action.new);

        return {
          ...state,
          messages,
          selected: [],
          showModal: false
        }
      case DESELECT:
        return {
          ...state,
          selected: [],
          showModal: false,
          mode: READ
        }
        case NEW_MESSAGE:
          return {
            ...state,
            selected: [],
            showModal: true,
            mode: NEW_MESSAGE
          }
      default:
        throw new Error();
    }
  }