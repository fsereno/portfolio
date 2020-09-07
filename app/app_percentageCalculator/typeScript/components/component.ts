"use strict;"
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";
import { ICalculatorService } from "../../../typeScript/Interfaces/ICalculatorService";

export class Component  {

    private validatorService: IValidatorService;
    private calculatorService: ICalculatorService
    private result: JQuery<HTMLElement>;
    private percentageInput: JQuery<HTMLElement>;
    private percentageOfInput: JQuery<HTMLElement>;
    private formId: string;

    constructor(
        validatorService: IValidatorService,
        calculatorService: ICalculatorService) {
        this.validatorService = validatorService;
        this.calculatorService = calculatorService;
        this.result = jQuery("#result");
        this.percentageInput = jQuery("#percentageInput");
        this.percentageOfInput = jQuery("#percentageOfInput");
        this.formId = "percentageCalculatorForm";
    }

    init() {
        jQuery(() => {
            this.validateForm();
        });
    }

    validateForm() {
        let validateFormOptions = {
            submitHandler: (form: HTMLElement) => {
                let valid = jQuery(form).valid();
                let percentage = Number(this.percentageInput.val());
                let ofThisNumber = Number(this.percentageOfInput.val());
                if (valid) {
                    let result = this.calculatorService.PercentageOf(percentage, ofThisNumber);
                    this.result.text(result.toString());
                }
            }
        }

        this.validatorService.ValidateForm(this.formId, validateFormOptions);
    }
}