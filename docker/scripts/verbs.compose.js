const constants = require('./constants.compose');
const helpers = require('./helpers.common');

const hasProd = helpers.has(constants.PROD);
const hasDev = helpers.has(constants.DEV);
const hasName = helpers.has(constants.NAME);
const hasInclude = helpers.has(constants.INCLUDE);
const hasAll = helpers.has(constants.ALL);
const hasHelp = helpers.has(constants.HELP);
const supported = [
    constants.PROD,
    constants.DEV,
    constants.NAME,
    constants.INCLUDE,
    constants.ALL,
    constants.HELP
];

module.exports = {
    hasProd,
    hasDev,
    hasName,
    hasInclude,
    hasAll,
    hasHelp,
    supported
};