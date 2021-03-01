"use strict;"

export const getUnreadEmailCount = (inbox = []) => inbox.filter(x => !x.read).length;