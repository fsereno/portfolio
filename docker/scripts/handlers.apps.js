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
const getComposeFile = () =>
    `docker-compose${verbs.hasDev
        ? '.dev'
        : verbs.hasTest
            ? `.${constants.test}`
            : ''
    }.yml`;

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
    if (verbs.hasName) {
        const name = getName();
        const composeFile = `./docker/${name}/${getComposeFile()}`;
        const destroyCallback = hasSomeEphemeral ? () => helpers.run(`docker compose -f ${composeFile} down`) : undefined;
        const command = `docker compose -f ${composeFile} up ${attachmentMode}`;
        helpers.run(command, {}, destroyCallback);
    } else {
        const composeFile = `./${getComposeFile()}`;
        const command = `docker compose -f ${composeFile} up ${attachmentMode}`;
        helpers.run(command);
    }
}

/**
 * Stops Docker containers based on the configured environment.
 */
const stop = () => {
    if (verbs.hasName) {
        const composeFile = getComposeFile();
        const name = getName();
        const command = `docker compose -f ./docker/${name}/${composeFile} down`;
        helpers.run(command);
    } else {
        const composeFile = `./${getComposeFile()}`;
        const command = `docker compose -f ${composeFile} down`;
        helpers.run(command);
    }
}

module.exports = {
    start,
    stop
};