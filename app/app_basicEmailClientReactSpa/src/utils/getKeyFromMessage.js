"use strict;"

export const getKeyFromMessage = message => `${message.id}_${message.thread}`;