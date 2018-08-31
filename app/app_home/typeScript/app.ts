
// Controllers
import { IndexController } from "./Controllers/IndexController";

// Services
import { TextService } from "../../typeScript/Services/StringService";

// Instantiate Services with dependency injection
let textService = new TextService();

// Controllers
let indexController = new IndexController
(
    textService
);

indexController.init();