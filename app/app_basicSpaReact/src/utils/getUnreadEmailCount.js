"use strict;"

export const getUnreadEmailCount = (messages = []) => messages.length > 0 ? messages.filter(x => !x.read).length : 0;