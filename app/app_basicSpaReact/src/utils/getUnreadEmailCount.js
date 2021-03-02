"use strict;"

export const getUnreadEmailCount = (inbox = []) => inbox.length > 0 ? inbox.filter(x => !x.read).length : 0;