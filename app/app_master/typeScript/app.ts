
// Controllers
import { IndexController } from "./Controllers/IndexController";

// Services
import { StringService } from "../../typeScript/Services/StringService";
import { ValidatorService } from "../../typeScript/Services/validatorService";

// Instantiate Services with dependency injection
let stringService = new StringService(),
    validatorService = new ValidatorService();

// Controllers
let indexController = new IndexController
(
    stringService,
    validatorService
);

indexController.init();