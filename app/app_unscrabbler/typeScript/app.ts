
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
import { StringRepository } from "../../typeScript/Repositories/StringRepository";

// Repositories
let stringRepository = new StringRepository();
let dictionaryRepository = new DictionaryRepository();

// Services
let stringService = new StringService(stringRepository),
    validatorService = new ValidatorService(),
    dictionaryService = new DictionaryService(dictionaryRepository),
    unscrabbleService = new UnscrabbleService(
        stringService, 
        dictionaryRepository
    );

// Controllers
let indexController = new IndexController
(
    stringService,
    validatorService,
    dictionaryService,
    unscrabbleService
);

indexController.init();