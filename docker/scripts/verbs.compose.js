const constants = require('./constants.compose');
const constantsCommon = require('./constants.common');
const helpers = require('./helpers.common');

const hasDev = helpers.get(constants.MODE) === constantsCommon.dev;
const hasAnalysis = helpers.get(constants.MODE) === constantsCommon.analysis;
const hasProd = !hasDev && !hasAnalysis;
const hasName = helpers.has(constants.NAME);
const hasInclude = helpers.has(constants.INCLUDE);
const hasHelp = helpers.has(constants.HELP);
const supported = [
    constants.NAME,
    constants.INCLUDE,
    constants.HELP,
    constants.MODE
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