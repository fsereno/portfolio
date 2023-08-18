const DEV = '--dev';
const APP = '--app';
const ENV = '--env';
const HELP = '--help';
const help = `
You run this script by calling node and the script name - node (start/stop).js. This is already configured as a script via npm:

> npm run (start/stop) -- [OPTIONS]

It is important to pass down the options via the -- seperator:

Eg. > npm run (start/stop) -- --help.

These are the available options:

${DEV} - use this to target the development version of a container.

${APP} - use this followed by the name of the application you want to target.

${ENV} - use this followed by the name of the environment file you would like to use.

${HELP} - This is help :-)`;

module.exports = {
    DEV,
    APP,
    ENV,
    HELP,
    help
};