const { execSync } = require('child_process');

const args = process.argv.slice(2);

if (args.length > 2) {
  console.error('Usage: node start.js <APP> <DIR>');
  process.exit(1);
}

const app = args[0];
const env = args[1];

const command = env
  ? `docker compose --env-file ./docker/${app}/${env}.env -f ./docker/${app}/docker-compose.yml up`
  : `docker compose -f ./docker/${app}/docker-compose.yml up`;

console.log('running command:' + command);

execSync(command, { stdio: 'inherit' });
