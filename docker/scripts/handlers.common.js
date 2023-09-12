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
        console.log('has help')
        console.log(help);
        process.exit(0);
    }
}

module.exports = {
    ifHasUnsupported,
    ifHasHelp
};