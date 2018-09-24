
// Controllers
import { IndexController } from "./Controllers/IndexController";

// Services
import { StringService } from "../../typeScript/Services/StringService";

// Instantiate Services with dependency injection
let stringService = new StringService();

// Controllers
let indexController = new IndexController
(
    stringService
);

indexController.init();