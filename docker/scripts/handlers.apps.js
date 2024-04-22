const constants = require('./constants.apps');
const helpers = require('./helpers.common');
const verbs = require('./verbs.apps');
const handlers = require('./handlers.common');
const hasSomeEphemeral = handlers.ifHasSome(verbs.ephemeral);
const attachmentMode = ( verbs.hasDev || verbs.hasAnalysis || verbs.hasTest || hasSomeEphemeral ) ? '' : '-d';

/**
 * Generates the name of the Docker Compose file based on the environment configuration.
 * @returns {string} The name of the Docker Compose file.
 */
const getComposeFilename = () => helpers.getComposeFilename(verbs.hasDev, verbs.hasTest, verbs.hasAnalysis);


const getComposeFilePath = () => verbs.hasName ? `./docker/${getName()}/${getComposeFilename()}` : `./${getComposeFilename()}`;

/**
 * Determines the name based on the presence of analysis in verbs.
 * If analysis is present, returns the analysis constant; otherwise, returns the NAME constant.
 * @returns {string} The determined name.
 */
const getName = () => verbs.hasAnalysis ? constants.analysis : helpers.get(constants.NAME);

/**
 * Starts Docker containers based on the configured environment.
 */
const start = () => {
    const composeFile = getComposeFilePath();
    const destroyCallback = hasSomeEphemeral ? () => helpers.run(`docker compose -f ${composeFile} down`) : undefined;
    const context = helpers.has(constants.CONTEXT) ? `DIR=${helpers.get(constants.CONTEXT)}` : `DIR=${helpers.get(constants.NAME)}`;
    const command = `${context} docker compose -f ${composeFile} up ${attachmentMode}`;
    helpers.run(command, {}, destroyCallback);
}

/**
 * Stops Docker containers based on the configured environment.
 */
const stop = () => {
    const composeFile = getComposeFilePath();
    const command = `docker compose -f ${composeFile} down`;
    helpers.run(command);
}

module.exports = {
    start,
    stop
};