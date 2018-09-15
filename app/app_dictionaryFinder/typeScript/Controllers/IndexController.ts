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

            self.validateForm("inputForm");
        
        });
    }

    validateForm(formId: string){

        const self = this;
        let validateFormOptions = {
            
            submitHandler: (form: HTMLElement)=>{

                let valid = jQuery(form).valid(),
                    input = jQuery("#input").val().toString();

                if(valid){

                    jQuery("#result").text(input);

                }   
            }
        }

        self.validatorService.ValidateForm(formId, validateFormOptions);
    }
}