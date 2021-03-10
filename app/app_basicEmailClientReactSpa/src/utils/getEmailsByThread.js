"use strict;"

export const getEmailsByThread = (messages = [], args = { from: "", to: "", subject: "" }) => {

    let result = [];

    if (args.from !== "" && args.to !== "" && args.subject !== "") {
        result = messages.filter(x => x.thread.includes(args.from)
            && x.thread.includes(args.to) && x.thread.includes(args.subject));
    }

    return result;
}