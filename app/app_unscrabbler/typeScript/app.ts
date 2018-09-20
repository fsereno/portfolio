
// Controllers
import { IndexController } from "./Controllers/IndexController";

// Services
import { StringService } from "../../typeScript/Services/StringService";
import { ValidatorService } from "../../typeScript/Services/validatorService";
import { DictionaryService } from "../../typeScript/Services/DictionaryService";
import { UnscrabbleService } from "../../typeScript/Services/UnscrabbleService";

// Repositories
import { DictionaryRepository } from "../../typeScript/Repositories/DictionaryRepository";

// Repositories
let dictionaryRepository = new DictionaryRepository();

// Services
let stringService = new StringService(),
    validatorService = new ValidatorService(),
    dictionaryService = new DictionaryService(dictionaryRepository),
    unscrabbleService = new UnscrabbleService(stringService)

// Controllers
let indexController = new IndexController
(
    stringService,
    validatorService,
    dictionaryService,
    unscrabbleService
);

indexController.init();