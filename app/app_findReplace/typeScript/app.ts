
// Controllers
import { BaseController } from "./Controllers/baseController";

// Services
import { TextService } from "../../typeScript/Services/textService";
import { ValidatorService } from "../../typeScript/Services/validatorService";

// Instantiate Services with dependency injection
let textService = new TextService();
let validatorService = new ValidatorService();

// Controllers
let baseController = new BaseController
(
    textService,
    validatorService
);

baseController.init();