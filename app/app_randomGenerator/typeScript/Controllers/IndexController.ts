// Interfaces
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";
import { IRandomGeneratorService } from "../../../typeScript/Interfaces/IRandomGeneratorService";
import { IStringService } from '../../../typeScript/Interfaces/IStringService';

export class IndexController  {

    private validatorService: IValidatorService;
    private randomGeneratorService: IRandomGeneratorService;
    private stringService: IStringService;
    private lengthInput: JQuery<HTMLElement>;
    private result: JQuery<HTMLElement>;
    private formId: string;

    constructor
    (
        validatorService: IValidatorService,
        randomGeneratorService: IRandomGeneratorService,
        stringService: IStringService
    )
    {
        this.validatorService = validatorService;
        this.randomGeneratorService = randomGeneratorService;
        this.stringService = stringService;
        this.lengthInput = jQuery("#lengthInput");
        this.result = jQuery("#result");
        this.formId = "randomGeneratorForm";
    }

    init() {

        jQuery(() => {

            this.validateForm();

        });
    }

    validateForm(){

        let validateFormOptions = {

            submitHandler: (form: HTMLElement) => {

                let valid = jQuery(form).valid(),
                    length = this.lengthInput.val();

                if(valid){

                    let alpha = this.stringService.Alphas,
                        numeric = this.stringService.Numerics,
                        criteria = [alpha, numeric];

                    let result = this.randomGeneratorService.GenerateRandomString(criteria, Number(length));
                    this.result.text(result);

                }
            }
        }

        this.validatorService.ValidateForm(this.formId, validateFormOptions);
    }
}