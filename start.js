const { execSync } = require('child_process');

const args = process.argv.slice(2);

console.log(args);

// Constants
const DEV = '--dev';
const APP = '--app';
const ENV = '--env';

// Methods
const has = (command) => !command && args.length === 0 ||  args.some(x => x === command);
const get = (command) => args[args.indexOf(command) + 1];
const run = (command) => {
  execSync(command, { stdio: 'inherit' });
  process.exit(0);
}

const hasProd = has();
const hasDev = has(DEV);
const hasApp = has(APP);
const hasEnv = has(ENV);

let command = 'docker compose up -d';

if (hasProd) {
  run(command);
}

const dockerCompose = 'docker-compose';
const composeFile = hasDev ? `${dockerCompose}.dev.yml` : `${dockerCompose}.yml`;

if (hasEnv && hasApp) {
  const env = get(ENV);
  const app = get(APP);
  command = `docker compose --env-file ./docker/${app}/${env}.env -f ./docker/${app}/${composeFile} up`;
  console.log('running command:' + command);
  //run(command);
}

if (hasApp) {
  const app = get(APP);
  command = `docker compose -f ./docker/${app}/${composeFile} up`;
  console.log('running command:' + command);
  //run(command);
}