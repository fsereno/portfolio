// Interfaces
import { ITestService } from "../Interfaces/ITestService";

class TestService implements ITestService {

    text() : void {

        console.log("Tester");

    }

}

export { TestService };