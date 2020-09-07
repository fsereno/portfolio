"use strict;"
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";
import { UserViewModel } from "../Models/UserViewModel";

export class Component  {

    private validatorService: IValidatorService;
    private formId: string;
    private editModalId: string;

    constructor(
        validatorService: IValidatorService) {
        this.validatorService = validatorService;
        this.formId = "editForm";
        this.editModalId = "editModal";
    }
    init() {
        jQuery(() => {
            this.validateForm();
            this.bind();
        });
    }
    validateForm(){
        this.validatorService.ValidateForm(this.formId, null);
    }
    bind() {
        ko.applyBindings(
            new UserViewModel(this.formId, this.editModalId)
        );
    }
}