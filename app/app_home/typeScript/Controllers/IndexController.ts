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

        $(() => {

            var text = self.textService.Concat("Application ", "1");

            console.log(text);

        });

    }
       
}