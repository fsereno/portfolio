"use strict;"

import React, { useState } from 'react';
import { ApplicationsContext } from '../../contexts';
import { ConfigUtil } from '../../../../js/modules/utils/configUtil';

export function ApplicationsContextProvider({children}) {

    const CONFIG = ConfigUtil.get();

    const APP_CONFIG = ConfigUtil.get("home");

    const [ applications, setApplications ] = useState(CONFIG.applications);

    const context = { config: CONFIG, appConfig: APP_CONFIG, applications: applications, set: setApplications }

    return (
        <ApplicationsContext.Provider value={context}>
            {children}
        </ApplicationsContext.Provider>
    )
}