const constants = require('./constants.image');
const helpers = require('./helpers.common');
const verbs = require('./verbs.image');

/**
 * Creates an image with tag.
 * Requires --name and --tag.
 */
const runIfHasNameAndTag = () => {
    if (verbs.hasName && verbs.hasTag) {
        const name = helpers.get(constants.NAME);
        const tag = helpers.get(constants.TAG);
        const dockerfile = verbs.hasDev ? 'Dockerfile.dev' : 'Dockerfile';
        const command = `docker image build -f "./docker/${name}/${dockerfile}" -t ${tag} .`;
        helpers.run(command);
    }
}

/**
 * Pushes an image with tag to the repository.
 * Requires --push and --tag.
 */
const runIfHasPushAndTag = () => {
    if (verbs.hasPush && verbs.hasTag) {
        const tag = helpers.get(constants.TAG);
        const command = `docker image push ${tag}`;
        helpers.run(command);
    }
}

module.exports = {
    runIfHasNameAndTag,
    runIfHasPushAndTag
};