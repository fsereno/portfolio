
// Services
import { NavigateComponentService } from './Services/NavigateComponentService';
import { TimerService } from '../../typeScript/Services/TimerService';
import { UpdateService } from './Services/updateService';

//Models
import { NavigateComponentModel } from './Models/NavigateComponentModel';
import { CubikModel } from './Models/CubikModel';

// Components
import { NavigateComponent } from "./Components/NavigateComponent";
import { CubikComponent } from './Components/CubikComponent';

// Controllers
import { IndexController } from "./Controllers/IndexController";
import { PlayerModel } from './Models/PlayerModel';

// Servies
let navigateService = new NavigateComponentService();
let updateService = new UpdateService();
let timerService = new TimerService(
    10, 
    "timer", 
    "Time is up!", 
    updateService);

// Models
let navigateComponentModel = new NavigateComponentModel(
    "player", 
    false, 
    ["click"]
);

let player = new PlayerModel("Joe Bloggs", 0);

let cubikModel = new CubikModel(
    "cube",
    "score",
    "target",
    0,
    player,
    "feedbackText",
    "LEVEL COMPLETE!",
    "YOU FAILED!"
);
         
//Components
let navigateComponent = new NavigateComponent(
    navigateComponentModel, 
    navigateService
);

let cubikComponent = new CubikComponent(
    cubikModel,
    timerService,
    updateService
);

// Controllers
let indexController = new IndexController(
    navigateComponent,
    cubikComponent
    );
indexController.init();