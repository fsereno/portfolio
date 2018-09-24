
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
import { RandomGeneratorRepository } from "../../typeScript/Repositories/RandomGeneratorRepository";

// Repositories
let dictionaryRepository = new DictionaryRepository(),
    randomGeneratorRepository = new RandomGeneratorRepository();

// Services
let stringService = new StringService(),
    validatorService = new ValidatorService(),
    dictionaryService = new DictionaryService(dictionaryRepository),
    unscrabbleService = new UnscrabbleService(
        stringService, 
        dictionaryRepository
    ),
    randomGeneratorService = new RandomGeneratorService(
        stringService,
        randomGeneratorRepository
        );

// Controllers
let indexController = new IndexController
(
    stringService,
    validatorService,
    dictionaryService,
    unscrabbleService,
    randomGeneratorService
);

indexController.init();