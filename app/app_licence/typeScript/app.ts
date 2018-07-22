
// Controllers
import { BaseController } from "./Controllers/baseController";

// Services
import { TestService } from "./Services/testService";

// Instantiate Services with dependency injection
let testService = new TestService();

// Controllers
let baseController = new BaseController
(
    testService
);

baseController.init();