"use strict;"

import { MY_ADDRESS } from '../globalConstants';

export const getReplyToEmailAddress = (selected) => {

    let address = "";

    if (selected.to && selected.from) {
        address = selected.to === MY_ADDRESS
        ? selected.from
        : selected.to;
    }

    return address;
}