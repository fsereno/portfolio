const constants = require('./constants.apps');
const helpers = require('./helpers.common');

const hasProd = helpers.has();
const hasDev = helpers.has(constants.DEV);
const hasApp = helpers.has(constants.APP);
const hasHelp = helpers.has(constants.HELP);
const hasAnalysis = helpers.has(constants.ANALYSIS);
const supported = [constants.DEV, constants.APP, constants.HELP, constants.ANALYSIS]

module.exports = {
    hasProd,
    hasDev,
    hasApp,
    hasHelp,
    hasAnalysis,
    supported
};