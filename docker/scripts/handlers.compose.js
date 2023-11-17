const chalk = require('chalk');
const constants = require('./constants.compose');
const helpers = require('./helpers.common');
const helpersCompose = require('./helpers.compose');
const verbs = require('./verbs.compose');
const handlers = require('./handlers.common');

const getComposeFile = () =>
    `docker-compose${verbs.hasDev
        ? '.dev'
        : ''
    }.yml`;

const getDevPath = () => `./docker/dev`;

const composeIfHasName = () => {
    if (verbs.hasName) {

        const values = helpers.getAll(constants.NAME);

        console.log(values);

        const fileName = getComposeFile();
        const devPath = getDevPath();
        const name = helpers.get(constants.NAME);
        const path = `${devPath}/${fileName}`

        const services = {
            //node: {...helpersCompose.getNode(name), networks: ['frontend', 'backend'], depends_on: ['api']},
            node: {...helpersCompose.getNode(name), networks: ['frontend', 'backend']},
            nginx: {...helpersCompose.getNginx()}
        }

        const networks = {
            frontend: null,
            backend: null
        }

        const compose = helpersCompose.compose({services, networks})
        console.log("build compose", name);
        console.log(compose);

        helpersCompose.createYaml(compose, path);
    }
}

module.exports = {
    composeIfHasName
};