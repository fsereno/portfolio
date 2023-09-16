const constants = require('./constants.image');
const helpers = require('./helpers.common');
const verbs = require('./verbs.image');

const runIfHasNameAndTag = () => {
    if (verbs.hasName && verbs.hasTag) {
        const name = helpers.get(constants.NAME);
        const tag = helpers.get(constants.TAG);
        const dockerfile = verbs.hasDev ? 'Dockerfile.dev' : 'Dockerfile';
        const command = `docker image build -f "./docker/${name}/${dockerfile}" -t ${tag} .`;
        helpers.run(command);
    }
}

module.exports = {
    runIfHasNameAndTag
};