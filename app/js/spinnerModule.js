"use strict;"

import React from 'react';

export let SpinnerModule = function() {
    let Render = function(props) {
        let showSpinner = props.showSpinner || false;
        let hideClass = !showSpinner ? "d-none" : "";
        let fadeClass = "fade-element";
        fadeClass = showSpinner ? `${fadeClass} in` : fadeClass;
        return(
            <div>
                <div id="spinner" class={`${hideClass} spinner-container overlay`}>
                </div>
                <div id="loader" class={`${hideClass} item loading`}>
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