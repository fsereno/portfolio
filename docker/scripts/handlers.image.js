const chalk = require('chalk');
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
 * Pushes an image with tag to the Docker Hub repository.
 * Requires --push and --tag.
 */
const runIfHasPushAndTag = () => {
    if (verbs.hasPush && verbs.hasTag) {
        const tag = helpers.get(constants.TAG);
        const command = `docker image push ${tag}`;
        helpers.run(command);
    }
}

/**
 * Pushes ALL configured application images to the Docker Hub repository.
 * Requires --push-all.
 */
const runIfPushAll = () => {
    if (verbs.hasPush && verbs.hasAll) {
        console.log(chalk.green('Pushing ALL configured application images to Docker Hub.'));
        const serviceConfigs = helpers.getServicesConfig();

        for (let index = 0; index < serviceConfigs.length; index++) {

            const element = serviceConfigs[index];
            const tag = element.image;

            if (tag && isMyImage(tag)) {
                const command = `docker image push ${tag}`;
                helpers.run(command);
            }
        }
        console.log(chalk.green('Completed pushing ALL configured application images to Docker Hub.'));
    }
}

/**
 * Checks if a tag is one of my tags.
 * @param {string} tag - The tag to check.
 */
const isMyImage = (tag) => tag.startsWith('fabiosereno/portfolio');

module.exports = {
    runIfHasNameAndTag,
    runIfHasPushAndTag,
    runIfPushAll
};