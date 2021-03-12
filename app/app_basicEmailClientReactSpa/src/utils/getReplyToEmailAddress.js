"use strict;"

import { MY_ADDRESS } from '../globalConstants';

export const getReplyToEmailAddress = (from = "", to = "") => {

    let address = "";

    if (to && from) {
        address = to === MY_ADDRESS
        ? from
        : to;
    }

    return address;
}