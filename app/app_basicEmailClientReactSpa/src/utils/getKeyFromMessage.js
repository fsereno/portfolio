"use strict;"

export const getKeyFromMessage = (message, index) => `${message.id}_${message.thread}_${index}`;