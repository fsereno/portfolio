"use strict;"

import React, { useState } from 'react';

export let PuzzleModule = function(answer, modalId) {
    const IS_INVALID_CLASS = "is-invalid";
    let isInvalidClass = "";
    let isValid = value => (!isNaN(value) ? Number(value) : value) === answer;
    let _isValid = false;
    let hasValue = value => typeof value !== "undefined" && value.length > 0;
    let getResult = () => _isValid;
    let show = () => $(`#${modalId}`).modal("show");
    let hide = () => $(`#${modalId}`).modal("hide");
    let RenderErrorMessage  = function(props) {
        if (hasValue(props.input) && !isValid(props.input)) {
            return (
                <div class="invalid-feedback d-block">Incorrect answer! Please try again.</div>
            );
        } else {
            return null;
        }
    }
    let Render = function(props) {

        const [input, setInput] = useState(0);

        if (isValid(input)) {
            _isValid = true;
            isInvalidClass = "";
        } else if(hasValue(input) && !isValid(input)) {
            _isValid = false;
            isInvalidClass = IS_INVALID_CLASS;
        }

        return (
            <div class="modal fade" data-backdrop="static" id={modalId} tabindex="-1" aria-modal="true" role="dialog">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title h4">{props.title}</h5>
                        </div>
                        <div class="modal-body">
                        <form id={`${modalId}_form`} onSubmit={props.event} autoComplete="off">
                            <p>{props.label}</p>
                            <label>What is: {props.puzzle} ?</label>
                            <div class="input-group mb-3">
                                <input
                                    id={`${modalId}_input`}
                                    onBlur={event => setInput(event.target.value)}
                                    required={props.required ? "required" : ""}
                                    type="text"
                                    class={`form-control ${isInvalidClass}`}
                                    aria-label={props.puzzle}
                                />
                                <div class="input-group-append">
                                    <button id={`${modalId}_submit`} class="btn btn-dark" type="submit">{props.button}</button>
                                </div>
                            </div>
                            <RenderErrorMessage
                                input={input}
                            />
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return {
        show : show,
        hide : hide,
        Render : Render,
        getResult : getResult
    }
};