"use strict;"

import React from 'react';
import { ConfigUtil } from '../utils/configUtil';

export const ConfigContext = React.createContext();

export function ConfigContextProvider({children, app}) {

    const config = ConfigUtil.get();

    const appConfig = ConfigUtil.get(app);

    const context = { config, appConfig}

    return (
        <ConfigContext.Provider value={context}>
            {children}
        </ConfigContext.Provider>
    )
}