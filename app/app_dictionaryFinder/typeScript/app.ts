
// Controllers
import { IndexController } from "./Controllers/IndexController";

// Services
import { DictionaryService } from "../../typeScript/Services/DictionaryService";
import { ValidatorService } from "../../typeScript/Services/validatorService";

// Repositories
import { DictionaryRepository } from "../../typeScript/Repositories/DictionaryRepository";

// Repositories
let dictionaryRepository = new DictionaryRepository();

// Instantiate Services with dependency injection
let dictionaryService = new DictionaryService(dictionaryRepository);
let validatorService = new ValidatorService();

// Controllers
let indexController = new IndexController
(
    dictionaryService,
    validatorService
);

indexController.init();