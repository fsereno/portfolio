"use strict;"

import React from 'react';
import { getDisplayAge } from '../utils/getDisplayAge';

export function Age(props) {
    return(
        <small>
            {getDisplayAge(props.age)}
        </small>
    );
}