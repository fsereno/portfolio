"use strict;"

import 'jquery';

import { IValidatorService } from "../Interfaces/IValidatorService";

export class ValidatorService implements IValidatorService {

    constructor() {
        $.validator.addMethod("nonNumeric", function (value, element) {
            return this.optional(element) || isNaN(Number(value));
        });
    }

    ValidateForm(formId: string, options: JQueryValidation.ValidationOptions): JQueryValidation.Validator {
        let validator = $("#" + formId).validate(options);
        return validator;
    }
}