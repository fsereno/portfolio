// Interfaces
import { ITextService } from "../../../typeScript/Interfaces/ITextService";
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";

export class IndexController  {
    
    textService: ITextService;
    validatorService: IValidatorService;

    constructor
    (

        textService: ITextService,
        validatorService: IValidatorService
      
    ) 
    {
        this.textService = textService;
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
                    
                    let alpha = self.textService.GetAlphaString(),
                        numeric = self.textService.GetNumericString(),
                        criteria = [alpha, numeric];

                    let result = self.textService.GenerateRandom(criteria, Number(length));
                    jQuery("#result").text(result);

                }   
            }
        }

        self.validatorService.ValidateForm(formId, validateFormOptions);
    }
}