const constants = require('./constants.tasks');
const helpers = require('./helpers.common');

const hasName = helpers.has(constants.NAME);
const hasHelp = helpers.has(constants.HELP);
const supported = [constants.NAME, constants.HELP]

module.exports = {
    hasName,
    hasHelp,
    supported
};