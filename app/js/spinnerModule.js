"use strict;"

import React, { useState } from 'react';

export let SpinnerModule = function() {
    let Render = function() {
        return(
            <div class="overlay">
                <div class="loader m-auto mt-10"></div>
            </div>
        )
    }
    return {
        Render : Render
    }
};