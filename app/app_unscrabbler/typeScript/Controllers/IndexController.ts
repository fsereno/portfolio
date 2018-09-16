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

                    let result = self.stringService.Unscrabble(
                        findThis,inThis);
                    
                    jQuery("#result").text(result.toString());

                }   
            }
        }

        self.validatorService.ValidateForm(formId, validateFormOptions);
    }
}