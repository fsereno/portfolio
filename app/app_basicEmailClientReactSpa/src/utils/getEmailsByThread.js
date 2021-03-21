"use strict;"

import { INBOX } from "../globalConstants";

export const getEmailsByThread = (messages = [], args = { from: "", to: "", subject: "", dir: "" }) => {

    let result = [];

    const filter = x => x.thread.includes(args.from)
        && x.thread.includes(args.to) && x.thread.includes(args.subject)
        && x.time <= args.time;

    const isValid = args.from !== "" && args.to !== "" && args.subject !== "";

    if (isValid) {

        result = messages.filter(x => args.dir === INBOX
                ? x.dir === INBOX && filter(x)
                : filter(x));
    }

    return result;
}