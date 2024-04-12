const chalk = require('chalk');
const constants = require('./constants.compose');
const helpers = require('./helpers.common');
const helpersCompose = require('./helpers.compose');
const verbs = require('./verbs.compose');

/**
 * Generates the filename of the Docker Compose file based on the environment configuration.
 * @returns {string} The filename of the Docker Compose file.
 */
const getComposeFilename = () =>
    `docker-compose${verbs.hasDev
        ? '.dev'
        : ''
    }.yml`;

    /**
 * Generates the filename of the NGINX configuration file based on the environment configuration.
 * @returns {string} The filename of the NGINX configuration file.
 */
const getNginxFilename = () =>
    `nginx${verbs.hasDev
        ? '.dev'
        : ''
    }.conf`;

/**
 * Asserts the mode based on whether the production flag is present.
 * Prints the mode to the console.
 */
const assertMode = () => console.log(chalk.blue('Mode:'), chalk.yellow(verbs.hasProd ? 'Production' : 'Development'));

/**
 * Sets the NGINX root configuration for production mode if the production flag is present.
 * @param {string[]} nginxConfig - An array representing the NGINX configuration.
 */
const setProdRoot = (nginxConfig = []) => {
    if (verbs.hasProd) {
        helpersCompose.appendNginxConfig(nginxConfig, helpersCompose.getNginxProdRoot());
    }
}

/**
 * Asserts that the Docker Compose process is complete and logs a success message to the console.
 */
const assertComplete = () => console.log(chalk.green(`Compose complate...`));

/**
 * Builds the Docker Compose configuration and associated NGINX configuration based on the environment configuration.
 */
const compose = () => {

        const serviceConfigs = helpers.getServicesConfig();
        const yamlFilename = getComposeFilename();
        const yamlRoot = './';
        const yamlPath = `${yamlRoot}/${yamlFilename}`
        const nginxFilename = getNginxFilename();
        const services = {}
        const dependsOn = [];
        const nginxConfig = helpersCompose.getNginxConfOpen();
        const networks = {
            frontend: null,
            backend: null
        }

        assertMode();
        setProdRoot(nginxConfig);
        addServices(serviceConfigs, services, nginxConfig);
        buildDependsOn(services, dependsOn);
        addNginx(services, serviceConfigs, dependsOn);
        addDevServer(services, nginxConfig, dependsOn);

        const compose = helpersCompose.compose({services, networks});

        helpersCompose.getNginxConfClose(nginxConfig);
        helpersCompose.createYaml(compose, yamlPath);
        helpersCompose.createNginxConfig(nginxConfig, nginxFilename);
        assertComplete();
}

/**
 * Adds development server configurations to the services object and NGINX configuration if in development mode.
 * @param {object} services - An object representing the services.
 * @param {string[]} nginxConfig - An array representing the NGINX configuration.
 * @param {string[]} dependsOn - An array representing the dependencies.
 */
const addDevServer = (services = {}, nginxConfig = [], dependsOn = []) => {
    if (verbs.hasDev) {
        const name = verbs.hasName ? helpers.get(constants.NAME) : 'home';
        const node = helpersCompose.getNodeDev(name);
        services.node = {...node.service, ...helpersCompose.getDependsOn(dependsOn)}
        helpersCompose.appendNginxConfig(nginxConfig, node.config);
    }
}

/**
 * Adds NGINX service configurations based on the environment configuration.
 * @param {object} services - An object representing the services.
 * @param {object[]} serviceConfigs - An array representing the service configurations.
 * @param {string[]} dependsOn - An array representing the dependencies.
 */
const addNginx = (services = {}, serviceConfigs = [], dependsOn = []) => {
    const nginxType = verbs.hasDev ? 'nginx.dev' : 'nginx.prod';
    const nginxServiceConfig = serviceConfigs.find(x => x.id === nginxType);
    const nginxService = helpersCompose.getService(nginxServiceConfig, verbs.hasDev);
    services.nginx = {...nginxService, ...helpersCompose.getDependsOn(dependsOn)}
}

/**
 * Builds a dependency array based on the services provided.
 * @param {object} services - An object representing the services.
 * @param {string[]} dependsOn - An array representing the dependencies.
 */
const buildDependsOn = (services = {}, dependsOn = []) => {
    Object.keys(services).forEach(key => {
        const doesNotExist = !dependsOn.some(x => x === key);
        if (doesNotExist) {
            dependsOn.push(key)
        }
    });
}

/**
 * Adds services to the service configurations and NGINX configuration based on the environment configuration.
 * @param {object[]} serviceConfigs - An array representing the service configurations.
 * @param {object} services - An object representing the services.
 * @param {string[]} nginxConfig - An array representing the NGINX configuration.
 */
const addServices = (serviceConfigs = [], services = {}, nginxConfig = []) => {
    if (verbs.hasInclude) {

        console.log(chalk.blue('Includes detected'))

        const applicationServices = helpers.getAll(constants.INCLUDE);

        addApplicationServices(applicationServices, serviceConfigs, services, nginxConfig);

    } else {
        const config = helpers.getConfig();

        config.applications.forEach(_application => {
            const applicationServices = _application.services;
            addApplicationServices(applicationServices, serviceConfigs, services, nginxConfig);
        });
    }
}

/**
 * This method will mutate the services and nginxConfig params to build up the services definition.
 * @param {*} applicationServices - The discovered services to add
 * @param {*} services - The dictionary to add to.
 * @param {*} nginxConfig - The Nginx config needed for each service. 
 */
const addApplicationServices = (applicationServices = [], serviceConfigs = [], services = {}, nginxConfig = []) => {

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