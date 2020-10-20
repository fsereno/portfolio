"use strict;"

import React from 'react';

export let ErrorModule = function(modalId) {
    let show = () => $(`#${modalId}`).modal("show");
    let hide = () => $(`#${modalId}`).modal("hide");
    let Render = function(props) {
        return (
            <div class="modal fade" data-backdrop="static" id={modalId} tabindex="-1" aria-modal="true" role="dialog">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title h4">{props.title || "We have a problem!"}</h5>
                        </div>
                        <div class="modal-body">
                            <div class="invalid-feedback d-block">
                                <p class="lead">
                                    {props.body || "An error has occurred. Please try again."}
                                </p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary btn-dark" data-dismiss="modal">Close</button>
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