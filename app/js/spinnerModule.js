"use strict;"

import React, { useState } from 'react';

const SPINNER_ID = "#spinner";

export let SpinnerModule = function(props = {}) {
    let _contentId = props.contentId || "";
    let _hideByDefault = props.hideByDefault || false;
    let hide = () => $(SPINNER_ID).hide();
    let show = () => $(SPINNER_ID).show();
    let hideContent = () => $(`#${_contentId}`).hide();
    let showContent = () => $(`#${_contentId}`).show();
    let Render = function() {
        return(
            <div id="spinner" class="spinner-container overlay" style={ { display: _hideByDefault ? "none" : "block" }}>
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
        Render : Render,
        hide : hide,
        show : show,
        hideContent : hideContent,
        showContent : showContent
    }
};