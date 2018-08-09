
// Controllers
import { BaseController } from "./Controllers/baseController";

// Services
import { TextService } from "../../typeScript/Services/textService";

// Instantiate Services with dependency injection
let textService = new TextService();

// Controllers
let baseController = new BaseController
(
    textService
);

baseController.init();