const constants = require('./constants');
const helpers = require('./helpers');

const hasProd = helpers.has();
const hasDev = helpers.has(constants.DEV);
const hasApp = helpers.has(constants.APP);
const hasEnv = helpers.has(constants.ENV);
const hasCreate = helpers.has(constants.C);
const hasHelp = helpers.has(constants.HELP);
const supported = [constants.DEV, constants.APP, constants.ENV, constants.HELP, constants.C]

module.exports = {
    hasProd,
    hasDev,
    hasApp,
    hasEnv,
    hasCreate,
    hasHelp,
    supported
};