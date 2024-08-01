const chalk = require('chalk');

const NAME = '--name';
const MODE = '--mode';
const INCLUDE = '--include';
const HELP = '--help';

const help = `
You run this script by calling node and the script name - node (start/stop).js. This is already configured as a script via npm:

${chalk.yellow('> npm run compose -- [OPTIONS]')}

It is important to pass down the options via the -- seperator:

Eg. > ${chalk.yellow('npm run compose -- --help')}

These are the available options:

${chalk.yellow(MODE)} - ${chalk.green('This command allows you to target a specific mode. Otherwise the production version is used. Available modes are: dev, analysis.')}

${chalk.yellow(NAME)} - ${chalk.green('This command is used by specifying the name of the definition to include in the compose file.')}

${chalk.yellow(INCLUDE)} - ${chalk.green('This command is used once, followed by the service definitions to include in the compose file. Otherwise ALL services are included by default.')}

${chalk.yellow(HELP)} - ${chalk.green('This is help :-)')}`;

module.exports = {
    NAME,
    MODE,
    INCLUDE,
    HELP,
    help,
};