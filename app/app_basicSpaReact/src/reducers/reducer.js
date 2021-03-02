"use strict;"

import { setEmailToRead } from '../utils/setEmailToRead';
import { getSelectedEmailById } from '../utils/getSelectedEmailById';
import { SELECT, DESELECT } from '../globalConstants';

export function reducer(state, action) {
    switch(action.type) {
      case SELECT:
        return {
          inbox: setEmailToRead(action.id, state),
          selected: getSelectedEmailById(state.inbox, action.id),
          isSelected: true
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