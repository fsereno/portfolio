// Repositories
import { StringRepository } from '../../typeScript/Repositories/StringRepository';

// Services
import { NavigateComponentService } from './Services/NavigateComponentService';
import { TimerService } from '../../typeScript/Services/TimerService';
import { UpdateService } from './Services/updateService';
import { RandomGeneratorService } from '../../typeScript/Services/RandomGeneratorService';
import { StringService } from '../../typeScript/Services/StringService';

//Models
import { NavigateComponentModel } from './Models/NavigateComponentModel';
import { CubikModel } from './Models/CubikModel';

// Components
import { NavigateComponent } from "./Components/NavigateComponent";
import { CubikComponent } from './Components/CubikComponent';

// Controllers
import { IndexController } from "./Controllers/IndexController";
import { PlayerModel } from './Models/PlayerModel';

// Repositories
let stringRepository = new StringRepository();

// Servies
let navigateService = new NavigateComponentService();
let updateService = new UpdateService();
let timerService = new TimerService(
    "timer",
    "feedbackText", 
    "Game Over", 
    updateService);
let stringService = new StringService(stringRepository);
let randomGeneratorService = new RandomGeneratorService(
    stringService);

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
    updateService,
    randomGeneratorService
);

// Controllers
let indexController = new IndexController(
    navigateComponent,
    cubikComponent
    );
indexController.init();