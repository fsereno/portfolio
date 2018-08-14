
// Controllers
import { IndexController } from "./Controllers/IndexController";

// Services
import { ValidatorService } from "../../typeScript/Services/validatorService";
import { CalculatorService } from "../../typeScript/Services/calculatorService";

// Instantiate Services with dependency injection
let validatorService = new ValidatorService();
let calculatorService = new CalculatorService();

// Controllers
let indexController = new IndexController
(
    validatorService,
    calculatorService
);

indexController.init();