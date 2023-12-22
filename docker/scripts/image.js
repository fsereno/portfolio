const handlers = require('./handlers.common');
const imageHandlers = require('./handlers.image');
const verbs = require('./verbs.image');
const constants = require('./constants.image');

handlers.ifHasUnsupported(verbs.supported);
handlers.ifHasHelp(verbs.hasHelp, constants.help);
handlers.validate(verbs.required);
imageHandlers.runIfHasNameAndTag();