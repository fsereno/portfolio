"use strict;"

import { setEmailToRead } from '../utils/setEmailToRead';
import { SELECT, DESELECT } from '../globalConstants';

export function reducer(state, action) {
    switch(action.type) {
      case SELECT:
        return {
          inbox: setEmailToRead(action.id, state),
          selected: state.inbox.filter(x => x.id === action.id)[0], // this needs to be tested
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