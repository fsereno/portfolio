const chalk = require('chalk');
const { execSync, exec } = require('child_process');
const args = process.argv.slice(2);
const fs = require('fs');
const CONFIG_PATH = './config.json';
const CONFIG_SERVICES_PATH = './config.services.json';

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

const getConfig = () => getJson(CONFIG_PATH);
const getServicesConfig = () => getJson(CONFIG_SERVICES_PATH);

const getJson = (path) => {
  try {
    const file = fs.readFileSync(path);
    return JSON.parse(file);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
    has,
    get,
    getAll,
    run,
    args,
    getConfig,
    getServicesConfig
};