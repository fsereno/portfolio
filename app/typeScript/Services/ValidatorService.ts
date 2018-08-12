import { IValidatorService } from "../Interfaces/IValidatorService";

export class ValidatorService implements IValidatorService
{
    
    constructor(){

        jQuery.validator.addMethod("nonNumeric", function(value, element) {
            return this.optional(element) || isNaN(Number(value));
        });

    }

    validateForm(formId: string, options: JQueryValidation.ValidationOptions): JQueryValidation.Validator {
        let validator = jQuery("#"+formId).validate(options);
        return validator;
    }
}