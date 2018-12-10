
// Services
import { NavigateComponentService } from './Services/NavigateComponentService';

//Models
import { NavigateComponentModel } from './Models/NavigateComponentModel';
import { CubikComponentModel } from './Models/CubikComponentModel';

// Components
import { NavigateComponent } from "./Components/NavigateComponent";
import { CubikComponent } from './Components/CubikComponent';

// Controllers
import { IndexController } from "./Controllers/IndexController";

// Servies
let navigateService = new NavigateComponentService();

// Models
let navigateComponentModel = new NavigateComponentModel(
    "navigate-component",
    "player", 
    false, 
    ["click"]
);

let cubikComponentModel = new CubikComponentModel(
    "cubik-component",
    "cube",
    "score",
    "time",
    0,
    new Date(),
    0
);
         
//Components
let navigateComponent = new NavigateComponent(
    navigateComponentModel, 
    navigateService
);

let cubikComponent = new CubikComponent(
    cubikComponentModel
);

// Controllers
let indexController = new IndexController(
    navigateComponent,
    cubikComponent
    );
indexController.init();