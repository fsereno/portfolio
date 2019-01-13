// Interfaces
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";
import { IRandomGeneratorService } from "../../../typeScript/Interfaces/IRandomGeneratorService";

export class IndexController  {
    
    private validatorService: IValidatorService;
    private randomGeneratorService: IRandomGeneratorService;
    private lengthInput: JQuery<HTMLElement>;
    private result: JQuery<HTMLElement>;
    private formId: string;

    constructor
    (

        validatorService: IValidatorService,
        randomGeneratorService: IRandomGeneratorService
      
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
                    
                    let alpha = self.randomGeneratorService.Alphas,
                        numeric = self.randomGeneratorService.Numerics,
                        criteria = [alpha, numeric];

                    let result = self.randomGeneratorService.GenerateRandomString(criteria, Number(length));
                    self.result.text(result);

                }   
            }
        }

        self.validatorService.ValidateForm(self.formId, validateFormOptions);
    }
}