// Interfaces
import { ITextService } from "../../../typeScript/Interfaces/ITextService";

// Models

class BaseController  {
    
    textService: ITextService;

    constructor
    (

        textService: ITextService
      
    ) 
    {
        this.textService = textService;
    }

    init() {

        const self = this;

        jQuery(() => {

            jQuery.validator.addMethod("nonNumeric", function(value, element) {
                return this.optional(element) || isNaN(Number(value));
            });

            jQuery("#findReplaceForm").validate({

                submitHandler: (form)=>{

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
            });
        });
    }
}

export { BaseController };