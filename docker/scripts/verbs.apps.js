const constants = require('./constants.apps');
const helpers = require('./helpers.common');

const hasProd = helpers.has();
const hasDev = helpers.has(constants.DEV);
const hasApp = helpers.has(constants.APP);
const hasEnv = helpers.has(constants.ENV);
const hasHelp = helpers.has(constants.HELP);
const hasAnalysis = helpers.has(constants.ANALYSIS);

console.log(helpers.has(constants.HELP))

const supported = [constants.DEV, constants.APP, constants.ENV, constants.HELP, constants.ANALYSIS]

module.exports = {
    hasProd,
    hasDev,
    hasApp,
    hasEnv,
    hasHelp,
    hasAnalysis,
    supported
};