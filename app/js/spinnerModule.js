"use strict;"

import React, { useState } from 'react';

export let SpinnerModule = function() {
    let Render = function() {
        return(
            <div class="spinner-container overlay">
                <div class="item loading">
                    <div class="spinner">
                        <div class="circle circle-1">
                            <div class="circle-inner"></div>
                        </div>
                        <div class="circle circle-2">
                            <div class="circle-inner"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return {
        Render : Render
    }
};