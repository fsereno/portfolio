const handlers = require('./handlers');

handlers.ifHasUnsupported();
handlers.ifHasHelp();
handlers.runIfHasProd();
handlers.runIfHasEnvAndApp();
handlers.runIfHasApp();