// Interfaces
import { IStringService } from "../../../typeScript/Interfaces/IStringService";
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";

export class IndexController  {
    
    textService: IStringService;
    validatorService: IValidatorService;

    constructor
    (

        textService: IStringService,
        validatorService: IValidatorService
      
    ) 
    {
        this.textService = textService;
        this.validatorService = validatorService;
    }

    init() {

        const self = this;

        jQuery(() => {

            self.validateForm("unscrabblerForm");
        
        });
    }

    validateForm(formId: string){

        const self = this;
        let validateFormOptions = {
            
            submitHandler: (form: HTMLElement)=>{

                let valid = jQuery(form).valid(),
                    findThis = jQuery("#findInput").val().toString(),
                    inThis = jQuery("#scrabbleInput").val().toString();

                if(valid){

                    let result = self.textService.Unscrabble(
                        findThis,inThis);
                    
                    jQuery("#result").text(result.toString());

                }   
            }
        }

        self.validatorService.ValidateForm(formId, validateFormOptions);
    }
}