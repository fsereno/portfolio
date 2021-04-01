"use strict;"

import { INBOX } from "../constants";

export const getEmailsByThread = (messages = [], args = { from: "", to: "", subject: "", dir: "" }) => {

    let result = [];

    const filter = x => {
        const [ from, to, subject ] = x.thread.split("_");

        return ((from === args.from || from === args.to) && (to === args.to || to === args.from))
            && subject === args.subject
            && x.time <= args.time;
    }

    const isValid = args.from !== "" && args.to !== "" && args.subject !== "";

    if (isValid) {

        result = messages.filter(x => args.dir === INBOX
                ? x.dir === INBOX && filter(x)
                : filter(x));
    }

    return result;
}