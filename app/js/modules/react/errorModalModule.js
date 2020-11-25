"use strict;"

import React from 'react';

export class ErrorModalModule {
    constructor(modalId) {
        this.modalId = modalId;
        this.render = this.render.bind(this);
    }
    show() { $(`#${this.modalId}`).modal("show") }
    hide() { $(`#${this.modalId}`).modal("hide") }
    render(props) {
        return (
            <div className="modal fade" data-backdrop="static" id={this.modalId} tabIndex="-1" aria-modal="true" role="dialog">
                <div className="modal-dialog modal-md">
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
                            <p className="lead text-danger px-2">
                                {props.body || "An error has occurred. Please try again."}
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary btn-dark" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};