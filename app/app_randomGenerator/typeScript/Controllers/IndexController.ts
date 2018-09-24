// Interfaces
import { IStringService } from "../../../typeScript/Interfaces/IStringService";
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";
import { IRandomGeneratorService } from "../../../typeScript/Interfaces/IRandomGeneratorService";

export class IndexController  {
    
    private stringService: IStringService;
    private validatorService: IValidatorService;
    private randomGeneratorService: IRandomGeneratorService;

    constructor
    (

        stringService: IStringService,
        validatorService: IValidatorService,
        randomGeneratorService: IRandomGeneratorService
      
    ) 
    {
        this.stringService = stringService;
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
                    
                    let alpha = self.randomGeneratorService.AlphaString,
                        numeric = self.randomGeneratorService.NumericString,
                        criteria = [alpha, numeric];

                    let result = self.randomGeneratorService.GenerateRandom(criteria, Number(length));
                    jQuery("#result").text(result);

                }   
            }
        }

        self.validatorService.ValidateForm(formId, validateFormOptions);
    }
}