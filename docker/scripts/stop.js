const handlers = require('./handlers.common');
const appsHandlers = require('./handlers.apps');
const verbs = require('./verbs.apps');
const constants = require('./constants.apps');

handlers.ifHasUnsupported(verbs.supported);
handlers.ifHasHelp(verbs.hasHelp, constants.help);
appsHandlers.stopIfHasProd();
appsHandlers.stopIfHasName();