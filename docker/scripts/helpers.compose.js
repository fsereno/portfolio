const chalk = require('chalk');
const fs = require('fs');
const yaml = require('js-yaml');
const constants = require('./constants.common');

/**
 * Gets the base compose definition.
 * @param {*} obj - The compose object.
 * @returns - The full compose object with the version defined.
 */
const compose = (obj = {}) => {
  const compose = {
    version: "3.9",
    ...obj
  }
  return compose;
}

/**
 * Gets the development node service definition.
* @param {*} dir - The application directory to build the dev server against.
 * @returns - The node service definition.
 */
const getNodeDev = (dir, {name, ports, networks, image}) => ({
  service: {
    image: image,
    environment: [`dir=${dir || 'home'}`],
    ports: ports,
    volumes: [
      './config.json:/usr/src/app/config.json',
      './babel.config.json:/usr/src/app/babel.config.json',
      './setupTests.js:/usr/src/app/setupTests.js',
      './app:/usr/src/app/app',
      './docs:/usr/src/app/docs',
      './build:/usr/src/app/build',
    ],
    container_name: name,
    networks: networks,
    mem_limit: '500M',
    cpus: 0.2
  },
  config: `
    location / {
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-NginX-Proxy true;
      proxy_pass http://node:8080;
      proxy_ssl_session_reuse off;
      proxy_set_header Host $http_host;
      proxy_cache_bypass $http_upgrade;
      proxy_redirect off;
      add_header Set-Cookie fs_portfolio_deployment_target=cloud;
    }
  `
})

/**
 * Gets the base version of Nginx service definition.
 * @returns The development service definition.
 */
const getNginxBase = ({name, ports, networks, image}) => ({
  image: image,
  ports: ports,
  container_name: name,
  networks: networks,
  mem_limit: '500M',
  cpus: 0.2
})

/**
 * Gets the development version of Nginx service definition.
 * @returns The development service definition.
 */
const getNginxDev = (service) => ({
  ...getNginxBase(service),
  volumes: [
    './nginx.dev.conf:/etc/nginx/conf.d/default.conf'
  ]
})

/**
 * Gets the production version of Nginx service definition.
 * @returns The development service definition.
 */
const getNginxProd = (service) => ({
  ...getNginxBase(service),
  ['x-aws-pull_credentials']: 'arn:aws:secretsmanager:eu-west-2:523190279095:secret:dockerhubAccessToken-1JuRZX'
})

/**
 * The development version of a .NET service definition.
 * @param {*} - The deconstructed service object.
 * @returns - The development service definition.
 */
const getDevDotNetService = (service) => {
  const {name} = service;
  const base = getServiceBase({...service, image: 'fabiosereno/portfolio.dotnet.dev:0.0.1'});
  const _service = {
    ...base.service,
    volumes: [`./app/app_${name}/backend/api:/usr/src/app/app/app_${name}/backend/api`,
      './backend/Portfolio.Core:/usr/src/app/backend/Portfolio.Core',
    ],
    command: `sh -c "dotnet build /usr/src/app/app/app_${name}/backend/api && dotnet /usr/src/app/app/app_${name}/backend/api/bin/Debug/net7.0/api.dll"`,
  }
  return {
    service: _service,
    config: base.config
  }
}

/**
 * The development version of a NodeJS service definition.
 * @param {*} - The deconstructed service object.
 * @returns - The development service definition.
 */
const getDevNodeService = (service) => {
  const {name} = service;
  const base = getServiceBase({...service, image: 'fabiosereno/portfolio.node.dev:0.0.1'});
  const _service = {
    ...base.service,
    volumes: [`./app/app_${name}/backend/api:/usr/src/app/app/app_${name}/backend/api`,
    ],
    command: `sh -c "node /usr/src/app/app/app_nodeToDo/backend/api/index.js"`,
  }
  return {
    service: _service,
    config: base.config
  }
}


/**
 * The production version of the .NET service definition.
 * @param {*} - The deconstructed service object.
 * @returns - The development service definition.
 */
const getServiceProd = (service) => {
  const base = getServiceBase(service);
  const _service = {
    ...base.service,
    ['x-aws-pull_credentials']: 'arn:aws:secretsmanager:eu-west-2:523190279095:secret:dockerhubAccessToken-1JuRZX'
  }
  return {
    service: _service,
    config: base.config
  }
}

/**
 * The base service definition.
 * @param {*} - The deconstructed service object.
 * @returns - The development service definition.
 */
const getServiceBase = ({name, ports, networks, dependsOn, image}) => {
  const [port] = ports[0].split(':');
  return {
    service: {
      image: image,
      container_name: name,
      networks: networks,
      ports: ports,
      mem_limit: '500M',
      cpus: 0.2,
      ...getDependsOn(dependsOn)
    },
    config:`
      location /backend/${name}/ {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-NginX-Proxy true;
        proxy_pass http://${name}:${port}/;
        proxy_ssl_session_reuse off;
        proxy_set_header Host $http_host;
        proxy_cache_bypass $http_upgrade;
        proxy_redirect off;
      }
    `
  }
}

/**
 * Gets the development version of a service.
 * @param {*} service - The service object.
 * @param {*} isDev - Determines to get the development version or poduction version.
 * @returns - The necessary service definition.
 */
const getService = (service, isDev) => {

  if (service === undefined) {
    throw new Error("argument missing for parameter - service");
  }

  switch (service.type) {
    case constants.DOT_NET:
      return isDev ? getDevDotNetService(service) : getServiceProd(service);
    case constants.NGINX:
      return isDev ? getNginxDev(service) : getNginxProd(service);
    case constants.NODE:
      return isDev ? getDevNodeService(service) : getServiceProd(service);
    default:
      break;
  }
}

/**
 * Builds the depends_on definition.
 * @param {*} dependsOn - The array of dependants.
 * @returns - The fully formed depends on object.
 */
const getDependsOn = (dependsOn = []) => ({
  depends_on: [...dependsOn]
})

/**
 * Gets the openning statement for the Nginx config file.
 * @returns - A string array, with the openning statement for the Nginx config file.
 */
const getNginxConfOpen = () => {
  return [`
    server {
      listen 80;
      server_name frontend;
  `]
}

/**
 * Gets the ending statement for the Nginx config file.
 * @returns - The config file, followed by the ending statement.
 */
const getNginxConfClose = (existingConfig = []) => existingConfig.push('}')

/**
 * Gets the production root definition for the nginx service.
 * @returns - The production root definition for the nginx service.
 */
const getNginxProdRoot =() => {
  return `
      location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        add_header Set-Cookie fs_portfolio_deployment_target=cloud;
      }
  `
}

/**
 * Adds the new config to the existing Nginx config array.
 * @param {*} existingConfig - The config to append to.
 * @param {*} newConfig - The new config to add.
 * @returns - The concatenated config.
 */
const appendNginxConfig = (existingConfig = [], newConfig = '') => existingConfig.push(newConfig)

/**
 * Creates the Nginx config file at the root of the project.
 * @param {*} config - The config to create.
 * @param {*} filename - The filename for the config file.
 */
const createNginxConfig = (config = [], filename = '') =>  {
  try {
    const path = `./${filename}`;
    fs.writeFileSync(path, config.join(""));
    console.log(chalk.green(`Nginx config file created at:`), chalk.yellow(`${path}`));
  } catch (error) {
    console.error(`Error creating the Nginx config file at: ${filename}`, error);
  }
}

/**
 * Creates the yaml file and writes it to disk.
 * @param {*} config - The config for the dump method.
 * @param {*} filePath - The file path to write the file to.
 */
const createYaml = (config, filePath) => {
  try {
    const yamlString = yaml.dump(config, { indent: 2 });

    fs.writeFileSync(filePath, yamlString);

    console.log(chalk.green(`Docker Compose file created at:`), chalk.yellow(`${filePath}`));
  } catch (error) {
    console.error(`Error creating the Docker Compose file at: ${filePath} `, error);
  }
}

module.exports = {
  getNodeDev,
  compose,
  createYaml,
  getService,
  getDependsOn,
  getNginxConfOpen,
  getNginxConfClose,
  appendNginxConfig,
  createNginxConfig,
  getNginxProdRoot
}