
// Controllers
import { IndexController } from "./Controllers/IndexController";

// Services
import { ValidatorService } from "../../typeScript/Services/validatorService";

// Instantiate Services with dependency injection
let validatorService = new ValidatorService();

// Controllers
let indexController = new IndexController
(
    validatorService
);

indexController.init();