const { execSync } = require('child_process');
const args = process.argv.slice(2);

const has = (command) => !command && args.length === 0 ||  args.some(x => x === command);
const get = (command) => args[args.indexOf(command) + 1];
const run = (command) => {
  execSync(command, { stdio: 'inherit' });
  process.exit(0);
}

module.exports = {
    has,
    get,
    run,
    args
};