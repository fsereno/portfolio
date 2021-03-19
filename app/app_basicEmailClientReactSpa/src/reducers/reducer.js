"use strict;"

import { setEmailToRead } from '../utils/setEmailToRead';
import { getEmailsByThread } from '../utils/getEmailsByThread';
import { getReplyToEmailAddress } from '../utils/getReplyToEmailAddress';
import {
  SELECT,
  DESELECT,
  DESELECT_THREAD,
  REPLY,
  SUBMIT,
  NEW_MESSAGE,
  READ,
  UPDATE_TO,
  UPDATE_SUBJECT,
  UPDATE_BODY,
  SHOW_VALIDATION,
  HIDE_VALIDATION,
  MY_ADDRESS
} from '../globalConstants';

export function Reducer(state, action) {
  switch(action.type) {
    case SELECT:
      return {
        messages: setEmailToRead(action.item.id, state.messages),
        selectedThread: getEmailsByThread(state.messages, action.item),
        selected: {
          ...state.selected,
          id: action.item.id,
          to: action.item.to,
          from: action.item.from,
          subject: action.item.subject,
        },
        showModal: action.showModal,
        mode: READ
      }
    case REPLY:
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
    case UPDATE_TO:
      return {
        ...state,
        selected: {
          ...state.selected,
          to: action.input
        }
      }
    case UPDATE_SUBJECT:
      return {
        ...state,
        selected: {
          ...state.selected,
          subject: action.input
        }
      }
    case UPDATE_BODY:
      return {
        ...state,
        selected: {
          ...state.selected,
          body: action.input
        }
      }
    case NEW_MESSAGE:
      return {
        ...state,
        selectedThread: [],
        showModal: action.showModal,
        mode: NEW_MESSAGE,
        selected: {
          ...state.selected,
          to: "",
          from: "",
          subject: "",
          body: ""
        }
      }
    case SUBMIT:

      const messages = [ ...state.messages ];

      messages.unshift(action.new);

      return {
        ...state,
        selected: {
          id: -1,
          to: "",
          from: "",
          subject: "",
          body: "",
        },
        messages,
        showModal: false
      }
    case DESELECT:
      return {
        ...state,
        selected: {
          id: -1,
          to: "",
          from: "",
          subject: "",
          body: "",
        },
        showModal: false,
        showValidation: false
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
          showModal: false,
          showValidation: false,
          mode: READ
        }
    case SHOW_VALIDATION:
      return {
        ...state,
        showValidation: true
      }
    case HIDE_VALIDATION:
      return {
        ...state,
        showValidation: false
      }
    default:
      throw new Error();
  }
}