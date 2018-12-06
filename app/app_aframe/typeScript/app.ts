
// Services
import { NavigateService } from './Services/NavigateService';

// Components
//import { TrackPadListenerComponent } from "./Components/TrackPadListenerComponent";
import { CursorNavigateComponent } from "./Components/CursorNavigateComponent";
//import { CursorNavigateComponent } from "./Components/CursorNavigateComponent";

// Controllers
import { IndexController } from "./Controllers/IndexController";
import { NavigateModel } from './Models/NavigateModel';

// Servies
let navigateService = new NavigateService();

// Components
let cursorNavigateComponentModel = new NavigateModel("camera", false, "click");
                           
let cursorNavigateComponent = new CursorNavigateComponent(
    cursorNavigateComponentModel, 
    navigateService
);

// Controllers
let indexController = new IndexController(
    //trackPadListenerComponent,
    cursorNavigateComponent,
    );
indexController.init();