// Repositories
import { StringRepository } from '../../typeScript/Repositories/StringRepository';

// Controllers
import { IndexController } from "./Controllers/IndexController";

// Services
import { StringService } from "../../typeScript/Services/StringService";
import { ValidatorService } from "../../typeScript/Services/validatorService";

// Repositories
let stringRepository = new StringRepository();

// Instantiate Services with dependency injection
let stringService = new StringService(stringRepository),
    validatorService = new ValidatorService();

// Controllers
let indexController = new IndexController
(
    stringService,
    validatorService
);

indexController.init();