const handlers = require('./handlers.common');
const imageHandlers = require('./handlers.image');
const verbs = require('./verbs.image');
const constants = require('./constants.image');

handlers.ifHasUnsupported(verbs.supported);
handlers.validate(verbs.required);
handlers.ifHasHelp(verbs.hasHelp, constants.help);
imageHandlers.runIfHasNameAndTag();