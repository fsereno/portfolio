const handlers = require('./handlers.common');
const tasksHandlers = require('./handlers.tasks');

const verbs = require('./verbs.tasks');

handlers.ifHasUnsupported(verbs.supported);
tasksHandlers.ifHasHelp();
tasksHandlers.runIfHasName();