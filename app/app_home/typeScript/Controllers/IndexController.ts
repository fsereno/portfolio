// Interfaces
import { IStringService } from "../../../typeScript/Interfaces/IStringService";

// Models

export class IndexController  {
    
    stringService: IStringService;

    constructor
    (

        stringService: IStringService
      
    ) 
    {
        this.stringService = stringService;
    }

    init() {

        const self = this;

        $(() => {

            var text = self.stringService.Concat("Application ", "1");

            console.log(text);

        });

    }
       
}