const constants = require('./constants.apps');
const helpers = require('./helpers.common');

const hasProd = !helpers.has(constants.DEV) && !helpers.has(constants.ANALYSIS);
const hasDev = helpers.has(constants.DEV);
const hasName = helpers.has(constants.NAME);
const hasContext = helpers.has(constants.CONTEXT);
const hasHelp = helpers.has(constants.HELP);
const hasAnalysis = helpers.has(constants.ANALYSIS);
const hasTest = helpers.has(constants.TEST);
const supported = [
    constants.DEV,
    constants.NAME,
    constants.CONTEXT,
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
    hasContext,
    hasHelp,
    hasAnalysis,
    hasTest,
    supported,
    ephemeral
};