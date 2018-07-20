// Interfaces
import { ITestService } from "../Interfaces/ITestService";

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

            self.testService.text();

        });

    }
       
}

export { BaseController };