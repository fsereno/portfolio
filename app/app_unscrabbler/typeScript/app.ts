
// Controllers
import { IndexController } from "./Controllers/IndexController";

// Services
import { TextService } from "../../typeScript/Services/textService";
import { ValidatorService } from "../../typeScript/Services/validatorService";

// Instantiate Services with dependency injection
let textService = new TextService();
let validatorService = new ValidatorService();

// Controllers
let indexController = new IndexController
(
    textService,
    validatorService
);

indexController.init();