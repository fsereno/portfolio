"use strict;"

import React from 'react';

export let ErrorModule = function(modalId) {
    let show = () => $(`#${modalId}`).modal("show");
    let hide = () => $(`#${modalId}`).modal("hide");
    let Render = function(props) {
        return (
            <div className="modal fade" data-backdrop="static" id={modalId} tabindex="-1" aria-modal="true" role="dialog">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="display-4 modal-title">{props.title || "We have a problem!"}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="lr">
                                    <span className="rl"></span>
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="invalid-feedback d-block">
                                <p className="lead">
                                    {props.body || "An error has occurred. Please try again."}
                                </p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary btn-dark" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return {
        show : show,
        hide : hide,
        Render : Render
    }
};