
// Controllers
import { IndexController } from "./Controllers/IndexController";

// Services
import { StringService } from "../../typeScript/Services/StringService";
import { ValidatorService } from "../../typeScript/Services/validatorService";
import { DictionaryService } from "../../typeScript/Services/DictionaryService";

// Repositories
import { DictionaryRepository } from "../../typeScript/Repositories/DictionaryRepository";

// Repositories
let dictionaryRepository = new DictionaryRepository();

// Services
let stringService = new StringService(),
    validatorService = new ValidatorService(),
    dictionaryService = new DictionaryService(dictionaryRepository);

// Controllers
let indexController = new IndexController
(
    stringService,
    validatorService,
    dictionaryService
);

indexController.init();