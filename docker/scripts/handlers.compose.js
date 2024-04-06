const chalk = require('chalk');
const constants = require('./constants.compose');
const helpers = require('./helpers.common');
const helpersCompose = require('./helpers.compose');
const verbs = require('./verbs.compose');

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

const getPath = () => './';

const assertMode = () => console.log(chalk.blue('Mode:'), chalk.yellow(verbs.hasProd ? 'Production' : 'Development'));

const setProdRoot = (nginxConfig = []) => {
    if (verbs.hasProd) {
        helpersCompose.appendNginxConfig(nginxConfig, helpersCompose.getNginxProdRoot());
    }
}

const assertComplete = () => console.log(chalk.green(`Compose complate...`));

const compose = () => {

        const serviceConfigs = helpers.getServicesConfig();
        const config = helpers.getConfig();
        const yamlFilename = getComposeFilename();
        const yamlRoot = getPath();
        const yamlPath = `${yamlRoot}/${yamlFilename}`
        const nginxFilename = getNginxFilename();
        const services = {}
        const dependsOn = [];
        const nginxConfig = helpersCompose.getNginxConfOpen();

        assertMode();
        setProdRoot(nginxConfig);

        if (verbs.hasInclude) {

            console.log(chalk.blue('Includes detected'))

            const applicationServices = helpers.getAll(constants.INCLUDE);

            addServices(applicationServices, serviceConfigs, services, nginxConfig);

        } else {

            config.applications.forEach(_application => {
                const applicationServices = _application.services;
                addServices(applicationServices, serviceConfigs, services, nginxConfig);
            });
        }

        Object.keys(services).forEach(key => {
            const doesNotExist = !dependsOn.some(x => x === key);
            if (doesNotExist) {
                dependsOn.push(key)
            }
        });

        const nginxType = verbs.hasDev ? 'nginx.dev' : 'nginx.prod';
        const nginxServiceConfig = serviceConfigs.find(x => x.id === nginxType);
        const nginxService = helpersCompose.getService(nginxServiceConfig, verbs.hasDev);
        services.nginx = {...nginxService, ...helpersCompose.getDependsOn(dependsOn)}

        if (verbs.hasDev) {
            const name = verbs.hasName ? helpers.get(constants.NAME) : 'home';
            const node = helpersCompose.getNodeDev(name);
            services.node = {...node.service, ...helpersCompose.getDependsOn(dependsOn)}
            helpersCompose.appendNginxConfig(nginxConfig, node.config);
        }

        const networks = {
            frontend: null,
            backend: null
        }

        const compose = helpersCompose.compose({services, networks});

        helpersCompose.getNginxConfClose(nginxConfig);
        helpersCompose.createYaml(compose, yamlPath);
        helpersCompose.createNginxConfig(nginxConfig, nginxFilename);
        assertComplete();
}

/**
 * This method will mutate the services and nginxConfig params to build up the services definition.
 * @param {*} applicationServices - The discovered services to add
 * @param {*} services - The dictionary to add to.
 * @param {*} nginxConfig - The Nginx config needed for each service. 
 */
const addServices = (applicationServices = [], serviceConfigs = [], services = {}, nginxConfig = []) => {

    if (applicationServices) {

        applicationServices.forEach(_service => {
            const service = serviceConfigs.find(x => x.id === _service);
            const doesNotExist = !services[_service];

            if (doesNotExist) {
                console.log(chalk.blue(`adding service:`), chalk.yellow(`${_service}`));

                const serviceConfig = helpersCompose.getService(service, verbs.hasDev);
                services[_service] = serviceConfig.service;

                console.log(chalk.blue(`adding nginx config for:`), chalk.yellow(`${_service}`));
                helpersCompose.appendNginxConfig(nginxConfig, serviceConfig.config);
            }
        });
    }
}

module.exports = {
    compose
};