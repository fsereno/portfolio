
// Controllers
import { IndexController } from "./Controllers/IndexController";

// Components
import { TrackPadListenerComponent } from "./Components/TrackPadListenerComponent";
import { NavigatorComponent } from "./Components/NavigateComponent";
import { CursorColourChangeComponent } from "./Components/CursorColourChangeComponent";
// Components

let trackPadListenerComponent = new TrackPadListenerComponent();
let navigateComponent = new NavigatorComponent(
                                    "camera", 
                                    "click",
                                    false
                                );
let cursorColourChangeComponent = new CursorColourChangeComponent();

// Controllers
let indexController = new IndexController(
    trackPadListenerComponent,
    navigateComponent,
    cursorColourChangeComponent
    );
indexController.init();