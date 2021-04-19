"use strict;"

import React from 'react';
import { getEmailDisplayAge } from '../utils/getEmailDisplayAge';

export const Age = React.memo((props) => {
    return (
        <small>{getEmailDisplayAge(props.age)}</small>
    );
})