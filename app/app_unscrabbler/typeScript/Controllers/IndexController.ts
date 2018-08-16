// Interfaces
import { ITextService } from "../../../typeScript/Interfaces/ITextService";

// Models

export class IndexController  {
    
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

            var text = self.textService.Concat("Application ", "Master Template");

            console.log(text);

        });
        

    }

    validateForm(formId: string){

        //Example method
        
    }
       
}