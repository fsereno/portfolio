"use strict;"

import React, { useState } from 'react';
import { ApplicationSortUtil } from "../../../../typeScript/Utils/applicationsSortUtil/dist/Utils/applicationsSortUtil/index";
import { ApplicationsContext, ConfigContext } from '../../contexts';

export function ApplicationsContextProvider({children}) {

    const configContext = React.useContext(ConfigContext);

    configContext.config.applications.sort(ApplicationSortUtil.sorter);

    const [ applications, setApplications ] = useState(configContext.config.applications);

    const context = {
        unmodified: configContext.config.applications,
        applications,
        setApplications
    }

    return (
        <ApplicationsContext.Provider value={context}>
            {children}
        </ApplicationsContext.Provider>
    )
}