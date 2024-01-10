const constants = require('./constants.apps');
const helpers = require('./helpers.common');

const hasProd = helpers.has(constants.PROD);
const hasDev = helpers.has(constants.DEV);
const hasName = helpers.has(constants.NAME);
const hasHelp = helpers.has(constants.HELP);
const hasAnalysis = helpers.has(constants.ANALYSIS);
const hasTest = helpers.has(constants.TEST);
const supported = [
    constants.PROD,
    constants.DEV,
    constants.NAME,
    constants.HELP,
    constants.ANALYSIS,
    constants.TEST,
    constants.REMOVE
];

const ephemeral = [constants.TEST, constants.REMOVE];

module.exports = {
    hasProd,
    hasDev,
    hasName,
    hasHelp,
    hasAnalysis,
    hasTest,
    supported,
    ephemeral
};