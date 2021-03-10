"use strict;"

export const getMessagesByDirectory = (messages = [], dir = "") => messages.filter(x => x.dir === dir);
