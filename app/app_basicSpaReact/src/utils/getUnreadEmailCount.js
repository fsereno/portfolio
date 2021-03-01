"use strict;"

export const getUnreadEmailCount = (context = { inbox: [] }) => context.inbox.filter(x => !x.read).length;