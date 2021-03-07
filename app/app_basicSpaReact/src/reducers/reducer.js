"use strict;"

import { setEmailToRead } from '../utils/setEmailToRead';
import { getEmailsByThread } from '../utils/getEmailsByThread';
import { getReplyToEmailAddress } from '../utils/getReplyToEmailAddress';
import {
  SELECT,
  DESELECT,
  REPLY,
  SUBMIT,
  NEW_MESSAGE,
  NEW_SUBJECT,
  READ,
  UPDATE_TO,
  UPDATE_SUBJECT,
  UPDATE_BODY,
  MY_ADDRESS
} from '../globalConstants';

export function reducer(state, action) {
    switch(action.type) {
      case SELECT:
        return {
          messages: setEmailToRead(action.selected.id, state.messages),
          selected: getEmailsByThread(state.messages, action.selected),
          to: action.selected.to,
          from: action.selected.from,
          subject: action.selected.subject,
          showModal: true,
          mode: READ
        }
      case REPLY:
        return {
          ...state,
          mode: REPLY,
          to: getReplyToEmailAddress(action.from, action.to),
          from: MY_ADDRESS,
          subject: action.subject
        }
      case UPDATE_TO:
        return {
          ...state,
          to: action.input,
        }
      case UPDATE_SUBJECT:
        return {
          ...state,
          subject: action.input,
        }
      case UPDATE_BODY:
        return {
          ...state,
          body: action.input,
        }
      case NEW_MESSAGE:
        return {
          ...state,
          selected: [],
          showModal: true,
          mode: NEW_MESSAGE,
          to: "",
          subject: NEW_SUBJECT,
          body: ""
        }
      case SUBMIT:

        const messages = [ ...state.messages ];

        messages.unshift(action.new);

        return {
          ...state,
          to: "",
          subject: "",
          body: "",
          messages,
          selected: [],
          showModal: false
        }
      case DESELECT:
        return {
          ...state,
          selected: [],
          showModal: false
        }
      default:
        throw new Error();
    }
  }