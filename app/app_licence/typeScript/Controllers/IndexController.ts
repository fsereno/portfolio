// Interfaces
import { IStringService } from "../../../typeScript/Interfaces/ITextService";

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

    init(
        
    ) {

        const self = this;

        $(() => {

            var text = self.textService.Concat("Application ", "Master Template");

            console.log(text);

        });

    }
       
}