"use strict;"

import { setEmailToRead } from '../utils/setEmailToRead';
import { getEmailsByThread } from '../utils/getEmailsByThread';
import { getReplyToEmailAddress } from '../utils/getReplyToEmailAddress';
import {
  SELECT,
  DESELECT,
  DESELECT_THREAD,
  REPLY_MESSAGE,
  SUBMIT,
  NEW_MESSAGE,
  READ,
  REPLY,
  UPDATE_TO,
  UPDATE_SUBJECT,
  UPDATE_BODY,
  SHOW_VALIDATION,
  HIDE_VALIDATION,
  MY_ADDRESS,
  RESET_MODE
} from '../constants';

export function Reducer(state, action) {
  switch(action.type) {
    case SUBMIT:

      const messages = [ ...state.messages ];

      messages.unshift(action.item);

      return {
        ...state,
        messages
      }
    default:
      throw new Error();
  }
}


export function EmailClientReducer(state, action) {
  switch(action.type) {
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