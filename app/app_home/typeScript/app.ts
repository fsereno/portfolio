
// Controllers
import { IndexController } from "./Controllers/IndexController";

// Services
import { StringService } from "../../typeScript/Services/StringService";

// Repositories
import { StringRepository } from "../../typeScript/Repositories/StringRepository";

// Repositories
let stringRepository = new StringRepository();

// Instantiate Services with dependency injection
let stringService = new StringService(stringRepository);

// Controllers
let indexController = new IndexController
(
    stringService
);

indexController.init();