const constants = require('./constants.tasks');
const helpers = require('./helpers.common');
const verbs = require('./verbs.tasks');

const runIfHasName = () => {
    if (verbs.hasName) {
        const name = helpers.get(constants.NAME);
        const command = `docker-compose run --rm ${name}`;
        helpers.run(command, { cwd: `./docker/${name}`});
    }
}

module.exports = {
    runIfHasName
};