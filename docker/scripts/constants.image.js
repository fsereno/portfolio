const chalk = require('chalk');

const DEV = '--dev';
const NAME = '--name';
const TAG = '--tag';
const PUSH = '--push';
const HELP = '--help';

const help = `
Image will build a new image of the specified application.

You run this script by calling node and the script name - node image.js. This is already configured as a script via npm:

${chalk.yellow('> npm run image -- [OPTIONS]')}

It is important to pass down the options via the -- seperator:

Eg. > ${chalk.yellow('npm run image -- --help')}

These are the available options:

${chalk.yellow(DEV)} - ${chalk.green('This command is used to image the development version of an application.')}

${chalk.yellow(NAME)} - ${chalk.green('This command should be followed by the name of the application you intend to image.')}

${chalk.yellow(TAG)} - ${chalk.green('This command is used to assign a tag to the image.')}

${chalk.yellow(PUSH)} - ${chalk.green('This command is used to push an image to the repository.')}

${chalk.yellow(HELP)} - ${chalk.green('This is help :-)')}`;

module.exports = {
    DEV,
    NAME,
    TAG,
    PUSH,
    HELP,
    help
};