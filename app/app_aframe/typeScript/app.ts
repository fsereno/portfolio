
// Services
import { NavigateComponentService } from './Services/NavigateComponentService';

// Components
import { NavigateComponent } from "./Components/NavigateComponent";

// Controllers
import { IndexController } from "./Controllers/IndexController";
import { NavigateComponentModel } from './Models/NavigateComponentModel';

// Servies
let navigateService = new NavigateComponentService();

// Components
let navigateComponentModel = new NavigateComponentModel(
    "navigate-component",
    "camera", 
    false, 
    ["click"]
);
                           
let navigateComponent = new NavigateComponent(
    navigateComponentModel, 
    navigateService
);

// Controllers
let indexController = new IndexController(
    navigateComponent,
    );
indexController.init();