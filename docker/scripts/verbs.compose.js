const constants = require('./constants.compose');
const helpers = require('./helpers.common');

const hasProd = helpers.has();
const hasDev = helpers.has(constants.DEV);
const hasName = helpers.has(constants.NAME);
const hasHelp = helpers.has(constants.HELP);
const supported = [
    constants.DEV,
    constants.NAME,
    constants.HELP
];

module.exports = {
    hasProd,
    hasDev,
    hasName,
    hasHelp,
    supported
};