const chalk = require('chalk');
const constants = require('./constants.compose');
const helpers = require('./helpers.common');
const helpersCompose = require('./helpers.compose');
const verbs = require('./verbs.compose');
const handlers = require('./handlers.common');

const getComposeFilename = () =>
    `docker-compose${verbs.hasDev
        ? '.dev'
        : ''
    }.yml`;

const getNginxFilename = () =>
    `nginx${verbs.hasDev
        ? '.dev'
        : ''
    }.conf`;

const getPath = () => verbs.hasDev ? `./docker/dev` : './';

const compose = () => {

        const serviceConfigs = helpers.getServicesConfig();
        const config = helpers.getConfig();
        const yamlFilename = getComposeFilename();
        const yamlRoot = getPath();
        const yamlPath = `${yamlRoot}/${yamlFilename}`
        const nginxFilename = getNginxFilename();
        const services = {}
        const dependsOn = [];
        let nginxConfig = helpersCompose.getNginxOpen();

        if (verbs.hasDev) {
            console.log(chalk.blue('mode:'), chalk.yellow('Dev'));
        }

        if (verbs.hasProd) {
            console.log(chalk.blue('Mode:'), chalk.yellow('Production'));
        }

        if (verbs.hasInclude) {
            console.log(chalk.blue('Includes detected'))
            const includes = helpers.getAll(constants.INCLUDE);

            includes.forEach(_service => {
                const service = serviceConfigs.find(x => x.name === _service);
                const doesNotexist = !services[_service];

                if (doesNotexist) {
                    console.log(chalk.yellow(`including service: ${_service}`));
                    const serviceConfig = helpersCompose.getService(service, verbs.hasDev)
                    services[_service] = serviceConfig.service;
                }
            });
        }

        config.applications.forEach(_application => {
            const applicationServices = _application.services;

            if (applicationServices) {
                applicationServices.forEach(_service => {
                    const service = serviceConfigs.find(x => x.name === _service);
                    const serviceConfig = helpersCompose.getService(service, verbs.hasDev);
                    const doesNotexist = !services[_service];

                    if (doesNotexist && verbs.hasAll) {
                        console.log(chalk.blue(`adding service:`), chalk.yellow(`${_service}`));
                        services[_service] = serviceConfig.service;
                    }

                    console.log(chalk.blue(`adding nginx config for:`), chalk.yellow(`${_service}`));
                    nginxConfig = helpersCompose.appendNginxConfig(nginxConfig, serviceConfig.config);
                });
            }
        });

        Object.keys(services).forEach(key => {
            const doesNotexist = !dependsOn.some(x => x === key);
            if (doesNotexist) {
                dependsOn.push(key)
            }
        });

        services.nginx = {...helpersCompose.getDevNginx(), ...helpersCompose.getDependsOn(dependsOn)}

        if (verbs.hasDev) {
            const name = verbs.hasName ? helpers.get(constants.NAME) : 'home';
            const node = helpersCompose.getNode(name);
            services.node = {...node.service, ...helpersCompose.getDependsOn(dependsOn)}
            nginxConfig = helpersCompose.appendNginxConfig(nginxConfig, node.config);
        }

        const networks = {
            frontend: null,
            backend: null
        }

        const compose = helpersCompose.compose({services, networks});

        nginxConfig = helpersCompose.getNginxEnd(nginxConfig);

        // debug
        //console.log(compose);
        //console.log(nginxConfig);
        // debug

        helpersCompose.createYaml(compose, yamlPath);
        helpersCompose.createNginxConfig(nginxConfig, nginxFilename);
}

module.exports = {
    compose
};