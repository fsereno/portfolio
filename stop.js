const { execSync } = require('child_process');

const args = process.argv.slice(2);

if (args.length > 1) {
  console.error('Usage: node stop-dev.js <APP>');
  process.exit(1);
}

const app = args[0];

const command = `docker compose -f ./docker/${app}/docker-compose.yml down`;

console.log('running command:' + command);

execSync(command, { stdio: 'inherit' });
