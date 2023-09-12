const handlers = require('./handlers.common');
const tasksHandlers = require('./handlers.tasks');
const verbs = require('./verbs.tasks');
const constants = require('./constants.tasks');

handlers.ifHasUnsupported(verbs.supported);
handlers.ifHasHelp(verbs.hasHelp, constants.help);
tasksHandlers.runIfHasName();