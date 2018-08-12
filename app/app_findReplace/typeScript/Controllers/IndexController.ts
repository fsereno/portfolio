// Interfaces
import { ITextService } from "../../../typeScript/Interfaces/ITextService";
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";

class IndexController  {
    
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

            self.validateForm("findReplaceForm");
        
        });
    }

    validateForm(formId: string){

        const self = this;
        let validateFormOptions = {
            
            submitHandler: (form: HTMLElement)=>{

                let valid = jQuery(form).valid();
                let findThis = jQuery("#findInput").val().toString();
                let inThis = jQuery("#textToReplace").text();
                let replaceWithThis = jQuery("#replaceInput").val().toString();

                if(valid){

                    let textReplaced = self.textService.FindReplace(
                        findThis,inThis,replaceWithThis);

                    jQuery("#textToReplace").text(textReplaced);

                }   
            }
        }

        self.validatorService.validateForm(formId, validateFormOptions);
    }
}

export { IndexController };