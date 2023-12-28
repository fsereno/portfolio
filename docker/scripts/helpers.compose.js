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
 * Gets the node service definition.
* @param {*} dir - The application directory to build the dev server against.
 * @returns - The node service definition.
 */
const getNode = (dir) => ({
  image: 'fabiosereno/portfolio.dev:0.0.2',
  environment: [`dir=${dir || 'home'}`],
  ports: ['8080:8080'],
  volumes: [
    '../../config.json:/usr/src/app/config.json',
    '../../babel.config.json:/usr/src/app/babel.config.json',
    '../../setupTests.js:/usr/src/app/setupTests.js',
    '../../app:/usr/src/app/app',
    '../../docs:/usr/src/app/docs',
    '../../build:/usr/src/app/build',
  ],
  container_name: 'node',
  networks: ['frontend', 'backend'],
  mem_limit: '500M',
  cpus: 0.2,
})

/**
 * Gets the development version of Nginx service definition.
 * @returns The development service definition.
 */
const getDevNginx = () => ({
  image: 'nginx:1.23.1',
  ports: ['80:80'],
  container_name: 'frontend',
  networks: ['frontend', 'backend'],
  mem_limit: '500M',
  cpus: 0.2
})

/**
 * The development version of the .NET service definition.
 * @param {*} - The deconstructed service object.
 * @returns - The development service definition.
 */
const getDevDotNetService = ({name, ports, networks, dependsOn}) => {
  const [port] = ports[0].split(':');
  return {
    service: {
      image: 'fabiosereno/portfolio.dotnet.dev:0.0.1',
      volumes: [`../../app/app_${name}/backend/api:/usr/src/app/app/app_${name}/backend/api`,
        '../../backend/Portfolio.Core:/usr/src/app/backend/Portfolio.Core',
      ],
      container_name: `${name}`,
      command: `sh -c "dotnet build /usr/src/app/app/app_${name}/backend/api && dotnet /usr/src/app/app/app_${name}/backend/api/bin/Debug/net7.0/api.dll"`,
      networks: networks,
      ports: ports,
      mem_limit: '500M',
      cpus: 0.2,
      ...getDependsOn(dependsOn)
    },
    server:`
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
}; // maybe return also the necessary nginx config as string - not just the service. We have the ports, name and network here already!

/**
 * Gets the service definition.
 * @param {*} service - The service object.
 * @param {*} isDev - Determines to get the development version or poduction version.
 * @returns - The necessary service definition.
 */
const getService = (service, isDev) => {
  return isDev ? getDevService(service) : undefined;
}

/**
 * Gets the development version of a service.
 * @param {*} service - The service object.
 * @returns - The necessary service definition.
 */
const getDevService = (service) => {
  switch (service.type) {
    case constants.DOT_NET:
      return getDevDotNetService(service);
    default:
      break;
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

    console.log(`Docker Compose YAML file created at: ${filePath}`);
  } catch (error) {
    console.error('Error converting Docker Compose configuration to YAML:', error);
  }
}

/**
 * Builds the depends_on definition.
 * @param {*} dependsOn - The array of dependants
 * @returns - The fully formed depends on object.
 */
const getDependsOn = (dependsOn = []) => ({
  depends_on: [...dependsOn]
});

// example config file as string could work, one big string ?
const buildNginxConfig = () =>  {

  const config = `
  server {
      listen 80;
      server_name frontend;

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
  }
  `;

  fs.writeFileSync('/', config);
}

module.exports = {
  getNode,
  getDevNginx,
  getDevDotNetService,
  compose,
  createYaml,
  getService,
  getDependsOn
}