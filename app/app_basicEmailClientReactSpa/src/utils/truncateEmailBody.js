"use strict;"

export const truncateEmailBody = (body = "", limit = 75) => {

    let result = body;

    if (body.length >= limit) {
        result = body.substring(0, limit);
    }

    return result;
}