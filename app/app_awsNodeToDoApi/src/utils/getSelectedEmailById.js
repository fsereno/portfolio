"use strict;"

export const getSelectedEmailById = (messages = [], id = 0) => messages.filter(x => x.id === id)[0];