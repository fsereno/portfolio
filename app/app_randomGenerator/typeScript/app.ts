
// Controllers
import { IndexController } from "./Controllers/IndexController";

// Services
import { StringService } from "../../typeScript/Services/StringService";
import { ValidatorService } from "../../typeScript/Services/validatorService";
import { RandomGeneratorService } from "../../typeScript/Services/RandomGeneratorService"

// Repositories
import { RandomGeneratorRepository } from "../../typeScript/Repositories/RandomGeneratorRepository";

// Repositories
let randomGeneratorRepository = new RandomGeneratorRepository();

// Instantiate Services with dependency injection
let stringService = new StringService(),
    validatorService = new ValidatorService(),
    randomGeneratorService = new RandomGeneratorService(
    stringService,
    randomGeneratorRepository
    );

// Controllers
let indexController = new IndexController
(
    validatorService,
    randomGeneratorService
);

indexController.init();