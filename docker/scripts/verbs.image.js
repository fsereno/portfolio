const constants = require('./constants.image');
const helpers = require('./helpers.common');

const hasDev = helpers.has(constants.DEV);
const hasName = helpers.has(constants.NAME);
const hasTag = helpers.has(constants.TAG);
const hasPush = helpers.has(constants.PUSH);
const hasHelp = helpers.has(constants.HELP);
const supported = [constants.DEV, constants.NAME, constants.HELP, constants.TAG, constants.PUSH]
const required = [constants.TAG]

module.exports = {
    hasDev,
    hasName,
    hasTag,
    hasPush,
    hasHelp,
    supported,
    required
};