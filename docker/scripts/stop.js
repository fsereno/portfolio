const handlers = require('./handlers.common');
const appsHandlers = require('./handlers.apps');
const verbs = require('./verbs.apps');

handlers.ifHasUnsupported(verbs.supported);
handlers.ifHasHelp();
appsHandlers.stopIfHasProd();
appsHandlers.stopIfHasApp();