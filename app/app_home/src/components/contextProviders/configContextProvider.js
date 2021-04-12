"use strict;"

import React from 'react';
import { ConfigContext } from '../../contexts';
import { ConfigUtil } from '../../../../js/modules/utils/configUtil';

export function ConfigContextProvider({children}) {

    const config = ConfigUtil.get();

    const appConfig = ConfigUtil.get("home");

    const context = { config, appConfig}

    return (
        <ConfigContext.Provider value={context}>
            {children}
        </ConfigContext.Provider>
    )
}