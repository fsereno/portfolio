// Interfaces
import { ITestService } from "../../../typeScript/Interfaces/ITestService";

// Models

class BaseController  {
    
    testService: ITestService;

    constructor
    (

        testService: ITestService
      
    ) 
    {
        this.testService = testService;
    }

    init(
        
    ) {

        const self = this;

        $(() => {

            var text = self.testService.text();

            console.log(text);

        });

    }
       
}

export { BaseController };