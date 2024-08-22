const chalk = require('chalk');

const NAME = '--name';
const CONTEXT = '--context';
const MODE = '--mode';
const HELP = '--help';
const TEST = '--test';
const test = 'test';
const REMOVE = '--rm';

const help = `
You run this script by calling node and the script name - node (start/stop).js. This is already configured as a script via npm:

${chalk.yellow('> npm run (start/stop) -- [OPTIONS]')}

It is important to pass down the options via the -- seperator:

Eg. > ${chalk.yellow('npm run (start/stop) -- --help')}

These are the available options:

${chalk.yellow(MODE)} - ${chalk.green('This command allows you to target a specific mode. Otherwise the production version is used. Available modes are: dev.')}

${chalk.yellow(NAME)} - ${chalk.green('This command is used by specifying the name of the application you want to target.')}

${chalk.yellow(CONTEXT)} - ${chalk.green(`This command allows you to define a context for a container. Use this if the context is different to that of the application ${NAME} or you require to pass a context to a root compose file.`)}

${chalk.yellow(TEST)} - ${chalk.green(`This command creates an ephemeral container and executes tests for this application`)}

${chalk.yellow(HELP)} - ${chalk.green('This is help :-)')}`;

module.exports = {
    NAME,
    CONTEXT,
    MODE,
    HELP,
    TEST,
    test,
    REMOVE,
    help
};