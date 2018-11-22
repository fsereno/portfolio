
// Controllers
import { IndexController } from "./Controllers/IndexController";

// Components
import { TrackPadListenerComponent } from "./Components/TrackPadListenerComponent";
import { CursorListenerComponent } from './Components/CursorListenerComponent';
// Components

let trackPadListenerComponent = new TrackPadListenerComponent();
let cursorListenerComponent = new CursorListenerComponent();

// Controllers
let indexController = new IndexController(trackPadListenerComponent,cursorListenerComponent);
indexController.init();