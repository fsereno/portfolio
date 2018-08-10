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

        $(() => {

            $("#findReplaceForm").validate({

                submitHandler: (form)=>{

                    let valid = $(form).valid();
                    let findThis = $("#findInput").val().toString();
                    let inThis = $("#textToReplace").text();
                    let replaceWithThis = $("#replaceInput").val().toString();

                    if(valid){

                        let textReplaced = self.textService.FindReplace(
                            findThis,inThis,replaceWithThis);

                        $("#textToReplace").text(textReplaced);

                    }
                }
            });
        });
    }
}

export { BaseController };