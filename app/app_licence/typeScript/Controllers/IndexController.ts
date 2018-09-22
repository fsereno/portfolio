// Interfaces
import { IStringService } from "../../../typeScript/Interfaces/IStringService";

// Models

export class IndexController  {
    
    private stringService: IStringService;

    constructor
    (

        stringService: IStringService
      
    ) 
    {
        this.stringService = stringService;
    }

    init(
        
    ) {

        const self = this;

        $(() => {

            var text = self.stringService.Concat("Application ", "Master Template");

            console.log(text);

        });

    }
       
}