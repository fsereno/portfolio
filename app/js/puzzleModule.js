"use strict;"

define(["React"],function(React) {
    const MODAL_ID = "puzzleModal";
    let answer = "";
    let set = (value) => answer = value;
    let isValid = (input) => input === answer;
    let show = () => $(`#${MODAL_ID}`).modal("show");
    let hide = () => $(`#${MODAL_ID}`).modal("hide");
    let template = function(props) {
        return (
            <div class="modal fade" data-backdrop="static" id={MODAL_ID} tabindex="-1" aria-modal="true" role="dialog">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title h4">{props.title}</h5>
                        </div>
                        <div class="modal-body">
                        <form onSubmit={props.event} autoComplete="off">
                            <label>{props.label}</label>
                            <div class="input-group mb-3">
                                <input required={props.required ? "required" : ""} type="text" class="form-control" placeholder={props.placeholder} aria-label={props.placeholder} />
                                <div class="input-group-append">
                                    <button class={props.isValidBtnClasses} type="submit">{props.button}</button>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return {
        set: set,
        isValid: isValid,
        show:show,
        hide:hide,
        template:template
    }
});