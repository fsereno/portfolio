"use strict;"

import React from 'react';
import { getEmailDisplayAge } from '../utils/getEmailDisplayAge';

export function Age(props) {
    return(
        <small>
            {getEmailDisplayAge(props.age)}
        </small>
    );
}