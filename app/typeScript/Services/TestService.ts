// Interfaces
import { ITestService } from "../Interfaces/ITestService";

class TestService implements ITestService {

    text() : string {

        var text = "This from the testService";
        
        return text;

    }

}

export { TestService };