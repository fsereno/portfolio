const constants = require('./constants.image');
const constantsCommon = require('./constants.common');
const helpers = require('./helpers.common');

const hasDev = helpers.get(constants.MODE) === constantsCommon.dev;
const hasName = helpers.has(constants.NAME);
const hasTag = helpers.has(constants.TAG);
const hasPush = helpers.has(constants.PUSH);
const hasAll = helpers.has(constants.ALL);
const hasHelp = helpers.has(constants.HELP);
const supported = [constants.MODE, constants.NAME, constants.HELP, constants.TAG, constants.PUSH, constants.ALL]

module.exports = {
    hasDev,
    hasName,
    hasTag,
    hasPush,
    hasAll,
    hasHelp,
    supported
};