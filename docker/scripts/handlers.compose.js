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

const compose = () => {

        const fileName = getComposeFile();
        const devPath = getDevPath();
        const path = `${devPath}/${fileName}`

        const services = {
            nginx: {...helpersCompose.getDevNginx()}
        }

        if (verbs.hasDev ) {
            let name = verbs.hasName ? helpers.get(constants.NAME) : 'home';
            services.node = {...helpersCompose.getNode(name)}
        }

        if (verbs.hasInclude) {
            const values = helpers.getAll(constants.INCLUDE);
            console.log(values);

            if (verbs.hasDev) {
                values.forEach(x => {
                    services[x] = helpersCompose.getDevService(x);
                });
            }
        }

        const networks = {
            frontend: null,
            backend: null
        }

        const compose = helpersCompose.compose({services, networks})
        console.log("build compose");
        console.log(compose);

        helpersCompose.createYaml(compose, path);
}

module.exports = {
    compose
};