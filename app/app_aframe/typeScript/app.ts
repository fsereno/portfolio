
// Controllers
import { IndexController } from "./Controllers/IndexController";

// Components
import { TrackPadListenerComponent } from "./Components/TrackPadListenerComponent";
import { CursorNavigatorComponent } from "./Components/CursorNavigateComponent";
import { CursorColourChangeComponent } from "./Components/CursorColourChangeComponent";
// Components

let trackPadListenerComponent = new TrackPadListenerComponent();
let cursorNavigateComponent = new CursorNavigatorComponent(
                                    "camera", 
                                    "click",
                                    false
                                );
let cursorColourChangeComponent = new CursorColourChangeComponent();

// Controllers
let indexController = new IndexController(
    trackPadListenerComponent,
    cursorNavigateComponent,
    cursorColourChangeComponent
    );
indexController.init();