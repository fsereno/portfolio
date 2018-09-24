// Interfaces
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";
import { IRandomGeneratorService } from "../../../typeScript/Interfaces/IRandomGeneratorService";

export class IndexController  {
    
    private validatorService: IValidatorService;
    private randomGeneratorService: IRandomGeneratorService;

    constructor
    (

        validatorService: IValidatorService,
        randomGeneratorService: IRandomGeneratorService
      
    ) 
    {
        this.validatorService = validatorService;
        this.randomGeneratorService = randomGeneratorService;
    }

    init() {

        const self = this;

        jQuery(() => {

            self.validateForm("randomGeneratorForm");
        
        });
    }

    validateForm(formId: string){

        const self = this;
        let validateFormOptions = {
            
            submitHandler: (form: HTMLElement)=>{

                let valid = jQuery(form).valid(),
                    length = jQuery("#lengthInput").val();
                
                if(valid){
                    
                    let alpha = self.randomGeneratorService.Alphas,
                        numeric = self.randomGeneratorService.Numerics,
                        criteria = [alpha, numeric];

                    let result = self.randomGeneratorService.GenerateRandom(criteria, Number(length));
                    jQuery("#result").text(result);

                }   
            }
        }

        self.validatorService.ValidateForm(formId, validateFormOptions);
    }
}