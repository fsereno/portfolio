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
    }.debug.yml`;

const getPath = () => verbs.hasDev ? `./docker/dev` : './';

const compose = () => {

        const configServices = helpers.getServicesConfig();
        const config = helpers.getConfig();

        const fileName = getComposeFile();
        const root = getPath();
        const path = `${root}/${fileName}`

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
                values.forEach(_service => {
                    const service = configServices.find(x => x.name === _service);
                    services[_service] = helpersCompose.getDevService(service);
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