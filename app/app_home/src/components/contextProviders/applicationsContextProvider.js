"use strict;"

import React, { useState } from 'react';
import { ApplicationsContext, ConfigContext } from '../../contexts';

export function ApplicationsContextProvider({children}) {

    const configContext = React.useContext(ConfigContext);

    const [ applications, setApplications ] = useState(configContext.config.applications);

    const context = { unmodified: configContext.config.applications, applications, setApplications }

    return (
        <ApplicationsContext.Provider value={context}>
            {children}
        </ApplicationsContext.Provider>
    )
}