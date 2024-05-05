const constants = require('./constants.apps');
const constantsCommon = require('./constants.common');
const helpers = require('./helpers.common');

const hasDev = helpers.get(constants.MODE) === constantsCommon.dev;
const hasAnalysis = helpers.get(constants.MODE) === constantsCommon.analysis;
const hasProd = !hasDev && !hasAnalysis;
const hasName = helpers.has(constants.NAME);
const hasContext = helpers.has(constants.CONTEXT);
const hasHelp = helpers.has(constants.HELP);
const hasTest = helpers.has(constants.TEST);
const supported = [
    constants.NAME,
    constants.CONTEXT,
    constants.HELP,
    constants.TEST,
    constants.REMOVE,
    constants.MODE
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