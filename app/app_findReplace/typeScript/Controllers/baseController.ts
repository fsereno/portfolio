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

            var text = self.textService.Concat("Application ", "Master Template");

            console.log(text);

            $("#findReplaceForm").on("submit", (e) => {

                e.preventDefault();
                console.log("form submitted");

            });

        });

    }
       
}

export { BaseController };