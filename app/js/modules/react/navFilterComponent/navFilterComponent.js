"use strict;"

import React, { useState, useEffect } from 'react';
import { ConfigContext } from '../configContextProvider';

export function NavFilterComponent(props) {

    const context = React.useContext(ConfigContext);

    console.log(context.config.applications);

    return (<div>TESTING</div>);
}