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
        this.lengthInput = jQuery("#lengthInput");
        this.result = jQuery("#result");
        this.formId = "randomGeneratorForm";
    }

    init() {

        const self = this;

        jQuery(() => {

            self.validateForm();
        
        });
    }

    validateForm(){

        const self = this;
        let validateFormOptions = {
            
            submitHandler: (form: HTMLElement)=>{

                let valid = jQuery(form).valid(),
                    length = self.lengthInput.val();
                
                if(valid){
                    
                    let alpha = self.stringService.Alphas,
                        numeric = self.stringService.Numerics,
                        criteria = [alpha, numeric];

                    let result = self.randomGeneratorService.GenerateRandomString(criteria, Number(length));
                    self.result.text(result);

                }   
            }
        }

        self.validatorService.ValidateForm(self.formId, validateFormOptions);
    }
}