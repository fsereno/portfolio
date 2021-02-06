import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";

export class Component  {

    private validatorService: IValidatorService;
    private input: JQuery<HTMLElement>;
    private result: JQuery<HTMLElement>;
    private formId: string;

    constructor(validatorService: IValidatorService) {
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

    validateForm() {
        let validateFormOptions = {

            submitHandler: (form: HTMLElement) => {

                let valid = jQuery(form).valid();
                let input = this.input.val().toString();

                if (valid){
                    this.result.text(input);
                }
            }
        }
        this.validatorService.ValidateForm(this.formId, validateFormOptions);
    }
}