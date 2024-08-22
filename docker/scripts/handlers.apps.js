const constants = require('./constants.apps');
const constantsCommon = require('./constants.common');
const helpers = require('./helpers.common');
const verbs = require('./verbs.apps');
const handlers = require('./handlers.common');
const hasSomeEphemeral = handlers.ifHasSome(verbs.ephemeral);
const attachmentMode = ( verbs.hasDev || verbs.hasTest || hasSomeEphemeral ) ? '' : '-d';

/**
 * Generates the name of the Docker Compose file based on the environment configuration.
 * @returns {string} The name of the Docker Compose file.
 */
const getComposeFilename = () => helpers.getComposeFilename(helpers.get(constants.MODE));

/**
 * Generates the path of the Docker Compose file based on the environment configuration.
 * @returns {string} The name of the Docker Compose file.
 */
const getComposeFilePath = () => verbs.hasName ? `./docker/${getName()}/${getComposeFilename()}` : `./${getComposeFilename()}`;

/**
 * Determines the name.
 * @returns {string} The determined name.
 */
const getName = () => helpers.get(constants.NAME);

/**
 * Starts Docker containers based on the configured environment.
 */
const start = () => {
    const composeFile = getComposeFilePath();
    const destroyCallback = hasSomeEphemeral ? () => helpers.run(`docker compose -f ${composeFile} down`) : undefined;
    const context = helpers.has(constants.CONTEXT) ? `DIR=${helpers.get(constants.CONTEXT)}` : '';
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