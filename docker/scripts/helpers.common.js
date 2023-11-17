const chalk = require('chalk');
const { execSync, exec } = require('child_process');
const args = process.argv.slice(2);

const has = (command) => !command && args.length === 0 || args.some(x => x === command);
const get = (command) => args[args.indexOf(command) + 1];
const getAll = (command) => {
  const all = [...args];
  const specific = all.splice(all.indexOf(command) + 1);
  const values = specific.filter(x => !x.startsWith('--'))
  return values;
}
const run = (command, options, callback = () => undefined) => {
  console.log(chalk.green('Running command: ' + command));
  execSync(command, {...options, stdio: 'inherit' });
  if (typeof callback === "function") {
    callback();
  }
  process.exit(0);
}

module.exports = {
    has,
    get,
    getAll,
    run,
    args
};