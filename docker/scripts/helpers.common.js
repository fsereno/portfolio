const chalk = require('chalk');
const { execSync } = require('child_process');
const args = process.argv.slice(2);
const fs = require('fs');
const CONFIG_PATH = './config.json';
const CONFIG_SERVICES_PATH = './config.services.json';
const constants = require('./constants.common');

/**
 * Checks if the provided command exists among the command-line arguments.
 * @param {string} command - The command to check for.
 * @returns {boolean} True if the command exists among the arguments, otherwise false.
 */
const has = (command) => args.some(x => x === command);

/**
 * Retrieves the value associated with the specified command from the command-line arguments.
 * @param {string} command - The command to retrieve the value for.
 * @returns {string|undefined} The value associated with the command, or undefined if not found.
 */
const get = (command) => args[args.indexOf(command) + 1];

/**
 * Retrieves all values associated with the specified command from the command-line arguments.
 * @param {string} command - The command to retrieve the values for.
 * @returns {string[]} An array containing all values associated with the command.
 */
const getAll = (command) => {
  const all = [...args];
  const specific = all.splice(all.indexOf(command) + 1);
  const values = specific.filter(x => !x.startsWith('--'))
  return values;
}

/**
 * Executes the specified command synchronously and exits the process afterward.
 * @param {string} command - The command to execute.
 * @param {Object} options - Additional options for the command execution.
 * @param {Function} [callback=() => undefined] - Optional callback function to execute after command execution.
 */
const run = (command, options, callback = () => undefined) => {
  console.log(chalk.green('Running command: ' + command));
  execSync(command, {...options, stdio: 'inherit' });
  if (typeof callback === "function") {
    callback();
  }
  process.exit(0);
}

/**
 * Retrieves the configuration object from the specified path.
 * @returns {Object} The configuration object.
 */
const getConfig = () => getJson(CONFIG_PATH);

/**
 * Retrieves the services configuration object from the specified path.
 * @returns {Object} The services configuration object.
 */
const getServicesConfig = () => getJson(CONFIG_SERVICES_PATH);

/**
 * Reads and parses a JSON file from the specified path.
 * @param {string} path - The path to the JSON file.
 * @returns {Object} The parsed JSON object.
 */
const getJson = (path) => {
  try {
    const file = fs.readFileSync(path);
    return JSON.parse(file);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Generates the name of the Docker Compose file based on the environment configuration.
 * @param {*} mode - Generates the specified version.
 * @returns The fully formed filename for the compose file.
 */
const getComposeFilename = (mode = "") => {

  let filename = 'docker-compose';

  switch (mode) {
    case constants.dev:
      filename = `${filename}.${constants.dev}`;
      break;
    case constants.test:
      filename = `${filename}.${constants.test}`;
      break;
    case constants.analysis:
      filename = `${filename}.${constants.analysis}`;
      break;
    default:
      break;
  }

  return  `${filename}.${constants.yml}`;
}

/**
 * Generates the filename of the NGINX configuration file based on the environment configuration.
 * @param {*} mode - Generates the specified version.
 * @returns {string} The filename of the NGINX configuration file.
 */
const getNginxFilename = (mode = "") => {

  let filename = 'nginx';

console.log("MDOE", mode)

  switch (mode) {
    case constants.dev:
    case constants.analysis:
      filename = `${filename}.${constants.dev}`;
      break;

    default:
      break;
  }

  return  `${filename}.${constants.conf}`;

}

module.exports = {
    has,
    get,
    getAll,
    run,
    args,
    getConfig,
    getServicesConfig,
    getComposeFilename,
    getNginxFilename
};