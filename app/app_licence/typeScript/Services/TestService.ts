// Interfaces
import { ITestService } from "../Interfaces/ITestService";

class TestService implements ITestService {

    text() : void {

        console.log("This app 2");

    }

}

export { TestService };