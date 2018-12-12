
// Services
import { NavigateComponentService } from './Services/NavigateComponentService';
import { TimerService } from '../../typeScript/Services/TimerService';
import { UpdateService } from './Services/updateService';

//Models
import { NavigateComponentModel } from './Models/NavigateComponentModel';
import { CubikComponentModel } from './Models/CubikComponentModel';

// Components
import { NavigateComponent } from "./Components/NavigateComponent";
import { CubikComponent } from './Components/CubikComponent';

// Controllers
import { IndexController } from "./Controllers/IndexController";
import { Player } from './Models/Player';

// Servies
let navigateService = new NavigateComponentService();
let updateService = new UpdateService();
let timerService = new TimerService(10, "timer", updateService);

// Models
let navigateComponentModel = new NavigateComponentModel(
    "navigate-component",
    "player", 
    false, 
    ["click"]
);

let player = new Player("Joe Bloggs", 0);

let cubikComponentModel = new CubikComponentModel(
    "cubik-component",
    "cube",
    "score",
    "target",
    0,
    player,
    timerService,
    updateService
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