"use strict;"
import { IStringService } from "../../../typeScript/Interfaces/IStringService";
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";

export class Component {

    private stringService: IStringService;
    private validatorService: IValidatorService;
    private findInput: JQuery<HTMLElement>;
    private result: JQuery<HTMLElement>;
    private replaceInput: JQuery<HTMLElement>;
    private formId: string;

    constructor (
        stringService: IStringService,
        validatorService: IValidatorService) {
        this.stringService = stringService;
        this.validatorService = validatorService;
        this.result = jQuery("#result");
        this.findInput = jQuery("#findInput");
        this.replaceInput = jQuery("#replaceInput");
        this.formId = "findReplaceForm";
    }

    init() {
        jQuery(() => {
            this.validateForm();
        });
    }

    validateForm() {
        let validateFormOptions = {
            submitHandler: (form: HTMLElement)=>{
                let valid = jQuery(form).valid();
                let findThis = this.findInput.val().toString();
                let inThis = this.result.text();
                let replaceWithThis = this.replaceInput.val().toString();

                if (valid) {
                    let textReplaced = this.stringService.FindReplace(findThis,inThis,replaceWithThis);
                    jQuery("#result").text(textReplaced);
                }
            }
        }

        this.validatorService.ValidateForm(this.formId, validateFormOptions);
    }
}