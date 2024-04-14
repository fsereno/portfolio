const constants = require('./constants.compose');
const helpers = require('./helpers.common');

const hasProd = !helpers.has(constants.DEV) && !helpers.has(constants.ANALYSIS);
const hasDev = helpers.has(constants.DEV);
const hasAnalysis = helpers.has(constants.ANALYSIS);
const hasName = helpers.has(constants.NAME);
const hasInclude = helpers.has(constants.INCLUDE);
const hasHelp = helpers.has(constants.HELP);
const supported = [
    constants.DEV,
    constants.NAME,
    constants.INCLUDE,
    constants.HELP,
    constants.ANALYSIS
];

module.exports = {
    hasProd,
    hasDev,
    hasAnalysis,
    hasName,
    hasInclude,
    hasHelp,
    supported
};