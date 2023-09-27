const constants = require('./constants.apps');
const helpers = require('./helpers.common');

const hasProd = helpers.has();
const hasDev = helpers.has(constants.DEV);
const hasName = helpers.has(constants.NAME);
const hasHelp = helpers.has(constants.HELP);
const hasAnalysis = helpers.has(constants.ANALYSIS);
const hasTestDotnet = helpers.has(constants.TEST_DOTNET);
const supported = [
    constants.DEV,
    constants.NAME,
    constants.HELP,
    constants.ANALYSIS,
    constants.TEST_DOTNET,
    constants.REMOVE
];

const ephemeral = [constants.TEST_DOTNET, constants.REMOVE];

module.exports = {
    hasProd,
    hasDev,
    hasName,
    hasHelp,
    hasAnalysis,
    hasTestDotnet,
    supported,
    ephemeral
};