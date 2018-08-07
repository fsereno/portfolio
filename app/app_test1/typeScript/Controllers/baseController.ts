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

    init(
        
    ) {

        const self = this;

        $(() => {

            var text = self.textService.Concat("Application ", "1cc");

            console.log(text);

        });

    }
       
}

export { BaseController };