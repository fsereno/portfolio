const handlers = require('./handlers');

handlers.ifHasUnsupported();
handlers.ifHasHelp();
handlers.stopIfHasProd();
handlers.stopIfHasApp();