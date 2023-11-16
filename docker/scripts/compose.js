const handlers = require('./handlers.common');
const composeHandlers = require('./handlers.compose');
const verbs = require('./verbs.compose');
const constants = require('./constants.compose');

handlers.ifHasUnsupported(verbs.supported);
handlers.ifHasHelp(verbs.hasHelp, constants.help);
composeHandlers.composeIfHasName();