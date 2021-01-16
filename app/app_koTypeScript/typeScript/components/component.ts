"use strict;"

import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";
import { UserViewModel } from "../Models/UserViewModel";

export class Component  {

    private validatorService: IValidatorService;
    private formId: string;

    constructor(validatorService: IValidatorService) {
        this.validatorService = validatorService;
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
            new UserViewModel("editForm", "editModal", "addModal")
        );
    }
}