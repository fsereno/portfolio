"use strict;"

export const getUnreadEmailCount = (messages = [], directory) => messages.length > 0 ? messages.filter(x => !x.read && x.dir === directory).length : 0;