
// Controllers
import { IndexController } from "./Controllers/IndexController";

// Services
import { StringService } from "../../typeScript/Services/StringService";
import { ValidatorService } from "../../typeScript/Services/validatorService";
import { RandomGeneratorService } from "../../typeScript/Services/RandomGeneratorService"

// Repositories
import { StringRepository } from "../../typeScript/Repositories/StringRepository";

// Repositories
let stringRepository = new StringRepository();

// Instantiate Services with dependency injection
let stringService = new StringService(stringRepository),
    validatorService = new ValidatorService(),
    randomGeneratorService = new RandomGeneratorService(
    stringService);

// Controllers
let indexController = new IndexController
(
    validatorService,
    randomGeneratorService,
    stringService
);

indexController.init();