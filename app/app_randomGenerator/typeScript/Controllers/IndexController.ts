// Interfaces
import { IStringService } from "../../../typeScript/Interfaces/IStringService";
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";

export class IndexController  {
    
    stringService: IStringService;
    validatorService: IValidatorService;

    constructor
    (

        stringService: IStringService,
        validatorService: IValidatorService
      
    ) 
    {
        this.stringService = stringService;
        this.validatorService = validatorService;
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
                    
                    let alpha = self.stringService.AlphaString,
                        numeric = self.stringService.NumericString,
                        criteria = [alpha, numeric];

                    let result = self.stringService.GenerateRandom(criteria, Number(length));
                    jQuery("#result").text(result);

                }   
            }
        }

        self.validatorService.ValidateForm(formId, validateFormOptions);
    }
}