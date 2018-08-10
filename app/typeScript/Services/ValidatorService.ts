import { ITextService } from "../Interfaces/ITextService";
import { IValidatorService } from "../Interfaces/IValidatorService";

export class ValidatorService implements IValidatorService
{
    
    constructor(){

        jQuery.validator.addMethod("nonNumeric", function(value, element) {
            return this.optional(element) || isNaN(Number(value));
        });

    }

    validateForm(formId: string, callBack: (valid: boolean) => void): void {

        jQuery("#"+formId).validate({

            submitHandler: (form)=>{

                let valid = jQuery(form).valid();

                if (typeof callBack === 'function'){
                    callBack(valid);
                }
            }
        });
    }
}