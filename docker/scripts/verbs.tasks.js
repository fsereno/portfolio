const constants = require('./constants.tasks');
const helpers = require('./helpers.common');

const hasName = helpers.has(constants.NAME);
const hasDir = helpers.has(constants.DIR);
const hasHelp = helpers.has(constants.HELP);
const supported = [constants.NAME, constants.HELP, constants.DIR]

module.exports = {
    hasName,
    hasDir,
    hasHelp,
    supported
};