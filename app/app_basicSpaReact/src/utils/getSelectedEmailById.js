"use strict;"

export const getSelectedEmailById = (inbox = [], id = 0) => inbox.filter(x => x.id === id)[0];