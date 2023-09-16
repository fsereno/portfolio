const chalk = require('chalk');
const helpers = require('./helpers.common');

const ifHasUnsupported = (supported = []) => {
    if (helpers.args.filter(arg => arg.startsWith("--")).some(x => supported.indexOf(x) === -1)) {
        console.error(chalk.redBright('ERROR: Unsupported arguments detected.'));
        process.exit(1);
    }
}

const ifHasHelp = (hasHelp = false, help = "") => {
    if (hasHelp) {
        console.log(help);
        process.exit(0);
    }
}

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
    ifHasHelp
};