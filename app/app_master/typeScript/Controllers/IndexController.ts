// Interfaces
import { IStringService } from "../../../typeScript/Interfaces/IStringService";

// Models

export class IndexController  {
    
    textService: IStringService;

    constructor
    (

        textService: IStringService
      
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