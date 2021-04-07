"use strict;"

import { SUBMIT } from '../constants';

export function EmailContextReducer(state, action) {
  switch (action.type) {
    case SUBMIT:

      const messages = [...state.messages];

      messages.unshift(action.item);

      return {
        ...state,
        messages
      }
    default:
      throw new Error();
  }
}