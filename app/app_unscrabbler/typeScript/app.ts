
// Controllers
import { IndexController } from "./Controllers/IndexController";

// Services
import { StringService } from "../../typeScript/Services/StringService";
import { ValidatorService } from "../../typeScript/Services/validatorService";
import { DictionaryService } from "../../typeScript/Services/DictionaryService";
import { UnscrabbleService } from "../../typeScript/Services/UnscrabbleService";
import { RandomGeneratorService } from "../../typeScript/Services/RandomGeneratorService"

// Repositories
import { DictionaryRepository } from "../../typeScript/Repositories/DictionaryRepository";
import { StringRepository } from "../../typeScript/Repositories/StringRepository";

// Repositories
let dictionaryRepository = new DictionaryRepository(),
    stringRepository = new StringRepository();

// Services
let stringService = new StringService(stringRepository),
    validatorService = new ValidatorService(),
    dictionaryService = new DictionaryService(dictionaryRepository),
    unscrabbleService = new UnscrabbleService(
        stringService, 
        dictionaryRepository
    ),
    randomGeneratorService = new RandomGeneratorService(
        stringService);

// Controllers
let indexController = new IndexController
(
    validatorService,
    dictionaryService,
    unscrabbleService,
    randomGeneratorService,
    stringService
);

indexController.init();