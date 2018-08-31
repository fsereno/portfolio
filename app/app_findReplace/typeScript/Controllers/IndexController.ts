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

            self.validateForm("findReplaceForm");
        
        });
    }

    validateForm(formId: string){

        const self = this;
        let validateFormOptions = {
            
            submitHandler: (form: HTMLElement)=>{

                let valid = jQuery(form).valid(),
                    findThis = jQuery("#findInput").val().toString(),
                    inThis = jQuery("#result").text(),
                    replaceWithThis = jQuery("#replaceInput").val().toString();

                if(valid){

                    let textReplaced = self.textService.FindReplace(
                        findThis,inThis,replaceWithThis);

                    jQuery("#result").text(textReplaced);

                }   
            }
        }

        self.validatorService.ValidateForm(formId, validateFormOptions);
    }
}