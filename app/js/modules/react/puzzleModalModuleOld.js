"use strict;"

import React, { useState } from 'react';

export let PuzzleModalModuleOld = function(answer, modalId) {
    const IS_INVALID_CLASS = "is-invalid";
    let isInvalidClass = "";
    let _isValid = false;
    let isValid = value => (!isNaN(value) ? Number(value) : value) === answer;
    let hasValue = value => typeof value !== "undefined" && value.length > 0;
    let isSolved = () => _isValid;
    let show = () => $(`#${modalId}`).modal("show");
    let hide = () => $(`#${modalId}`).modal("hide");
    let RenderErrorMessage  = function(props) {
        if (hasValue(props.input) && !isValid(props.input)) {
            return (
                <div className="invalid-feedback d-block">Incorrect answer! Please try again.</div>
            );
        } else {
            return null;
        }
    }
    let handlePuzzleSubmit = (event) => {
        event.preventDefault();
        if (isSolved()) {
            hide();
        }
    }
    let render = function(props) {

        const [input, setInput] = useState(0);

        if (isValid(input)) {
            _isValid = true;
            isInvalidClass = "";
        } else if(hasValue(input) && !isValid(input)) {
            _isValid = false;
            isInvalidClass = IS_INVALID_CLASS;
        }

        return (
            <div className="modal fade" data-backdrop="static" id={modalId} tabIndex="-1" aria-modal="true" role="dialog">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="display-4 modal-title">{props.title || "Are you a human?"}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="lr">
                                    <span className="rl"></span>
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <form id={`${modalId}_form`} onSubmit={props.event || handlePuzzleSubmit} autoComplete="off">
                            <p>{props.label || "First answer this question to unlock the API:"}</p>
                            <label>What is: {props.puzzle} ?</label>
                            <div className="input-group mb-3">
                                <input
                                    id={`${modalId}_input`}
                                    onBlur={event => setInput(event.target.value)}
                                    required={(props.required || true) ? "required" : ""}
                                    type="text"
                                    className={`form-control ${isInvalidClass}`}
                                    aria-label={props.puzzle}
                                />
                                <div className="input-group-append">
                                    <button id={`${modalId}_submit`} className="btn btn-dark" type="submit">{props.button || "Submit"}</button>
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
        render : render,
        isSolved : isSolved
    }
};