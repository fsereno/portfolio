// Interfaces
import { ITextService } from "../../../typeScript/Interfaces/ITextService";
import { IValidatorService } from "../../../typeScript/Interfaces/IValidatorService";
import { TextService } from "../../../typeScript/Services/textService";
// Models

class BaseController  {
    
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

            self.validatorService.validateForm("findReplaceForm", self.replaceTextCallBack);
        
        });
    }

    replaceTextCallBack(valid: boolean){

        let textService = new TextService();
        let findThis = jQuery("#findInput").val().toString();
        let inThis = jQuery("#textToReplace").text();
        let replaceWithThis = jQuery("#replaceInput").val().toString();

        if(valid){

            let textReplaced = textService.FindReplace(
                findThis,inThis,replaceWithThis);

            jQuery("#textToReplace").text(textReplaced);

        }
    }
}

export { BaseController };