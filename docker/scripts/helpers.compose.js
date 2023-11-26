const chalk = require('chalk');
const fs = require('fs');
const yaml = require('js-yaml');
const constants = require('./constants.common');

const compose = (obj = {}) => {
  const compose = {
    version: "3.9",
    ...obj
  }
  return compose;
}

// these definitions could live somewhere else

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
  networks: ['frontend', 'backend'], // dynamic
  //depends_on: ['api'], // dynamic
  mem_limit: '500M',
  cpus: 0.2,
})

const getDevNginx = () => ({
  image: 'nginx:1.23.1',
  ports: ['80:80'],
  container_name: 'frontend',
  networks: ['frontend', 'backend'], // dynamic
  //depends_on: ['api', 'node'], // dynamic
  mem_limit: '500M',
  cpus: 0.2
})

// dynamic
// this will be used as many times as necessary for backend services in dev
const getDevDotNetService = ({name, ports, networks}) => ({
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
});

const getDevService = (service) => {
  switch (service.type) {
    case constants.DOT_NET:
      return getDevDotNetService(service);
    default:
      break;
  }
}

const createYaml = (config, filePath) => {
  try {
    const yamlString = yaml.dump(config, { indent: 2 });

    fs.writeFileSync(filePath, yamlString);

    console.log(`Docker Compose YAML file created at: ${filePath}`);
  } catch (error) {
    console.error('Error converting Docker Compose configuration to YAML:', error);
  }
}

module.exports = {
  getNode,
  getDevNginx,
  getDevDotNetService,
  compose,
  createYaml,
  getDevService
}