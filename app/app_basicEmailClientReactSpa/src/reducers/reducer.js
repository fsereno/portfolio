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
  READ,
  UPDATE_TO,
  UPDATE_SUBJECT,
  UPDATE_BODY,
  SHOW_VALIDATION,
  HIDE_VALIDATION,
  MY_ADDRESS
} from '../globalConstants';

export function reducer(state, action) {
  switch(action.type) {
    case SELECT:
      return {
        messages: setEmailToRead(action.item.id, state.messages),
        selectedThread: getEmailsByThread(state.messages, action.item),
        id: action.item.id,
        to: action.item.to,
        from: action.item.from,
        subject: action.item.subject,
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
        selectedThread: [],
        showModal: true,
        mode: NEW_MESSAGE,
        to: "",
        subject: "",
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
        showModal: false
      }
    case DESELECT:
      return {
        ...state,
        id: -1,
        showModal: false,
        showValidation: false
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