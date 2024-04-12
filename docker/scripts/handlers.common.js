const chalk = require('chalk');
const helpers = require('./helpers.common');

/**
 * Checks if any unsupported arguments are provided.
 * @param {string[]} supported - An array of supported arguments.
 */
const ifHasUnsupported = (supported = []) => {
    if (helpers.args.filter(arg => arg.startsWith("--")).some(x => supported.indexOf(x) === -1)) {
        console.error(chalk.redBright('ERROR: Unsupported arguments detected.'));
        process.exit(1);
    }
}

/**
 * Checks if any of the specified arguments are present among the command-line arguments.
 * @param {string[]} some - An array of arguments to check for.
 * @returns {boolean} True if any of the specified arguments are found, otherwise false.
 */
const ifHasSome = (some = []) => helpers.args.filter(arg => arg.startsWith("--")).some(x => some.indexOf(x) > -1);

/**
 * Checks if the "hasHelp" flag is set to true and prints the help message if provided.
 * @param {boolean} hasHelp - A flag indicating whether help message should be displayed.
 * @param {string} [help=""] - The help message to display.
 */
const ifHasHelp = (hasHelp = false, help = "") => {
    if (hasHelp) {
        console.log(help);
        process.exit(0);
    }
}

/**
 * Validates if the required arguments are present among the command-line arguments.
 * @param {string[]} required - An array of required arguments.
 */
const validate = (required = []) => {
    const argsArray = helpers.args.filter(arg => arg.startsWith("--"))
    var valid = required.every(item => argsArray.includes(item));
    const missingItems = required.filter(item => !helpers.args.includes(item));
    if (!valid) {
        console.error(chalk.redBright(`ERROR: Missing required arguments. ${missingItems.join(',')}`));
        process.exit(1);
    }
}

module.exports = {
    validate,
    ifHasUnsupported,
    ifHasHelp,
    ifHasSome
};