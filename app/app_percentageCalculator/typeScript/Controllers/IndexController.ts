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

        $(() => {

            var text = self.textService.Concat("Application ", "Master Template");

            console.log(text);

        });

    }
       
}