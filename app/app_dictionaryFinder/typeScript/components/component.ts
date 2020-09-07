"use strict;"
import { IDictionaryService } from "../../../typeScript/Interfaces/IDictionaryService";
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";

export class Component {

    private dictionaryService: IDictionaryService;
    private validatorService: IValidatorService;
    private input: JQuery<HTMLElement>;
    private result: JQuery<HTMLElement>;
    private formId: string;

    constructor (
        dictionaryService: IDictionaryService,
        validatorService: IValidatorService) {
        this.dictionaryService = dictionaryService;
        this.validatorService = validatorService;
        this.input = jQuery("#input");
        this.result = jQuery("#result");
        this.formId = "inputForm";
    }

    init() {
        jQuery(() => {
            this.validateForm();
        });
    }

    validateForm(){
        let validateFormOptions = {
            submitHandler: (form: HTMLElement) => {
                let valid = jQuery(form).valid();
                let input = this.input.val().toString();
                if (valid) {
                    let dictionaryResultsModel = this.dictionaryService.Find(input);
                    let result = `${dictionaryResultsModel.result.toString()}: ${dictionaryResultsModel.word}, ${dictionaryResultsModel.description}`;
                    this.result.text(result);
                }
            }
        }

        this.validatorService.ValidateForm(this.formId, validateFormOptions);
    }
}