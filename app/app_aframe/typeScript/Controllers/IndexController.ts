import {IComponent} from "../Interfaces/IComponent";
import { CursorColourChangeComponent } from '../Components/CursorColourChangeComponent';

export class IndexController  {
    
    private trackPadListenerComponent: IComponent;
    private cursorNavigateComponent: IComponent;
    private cursorColourChangeComponent: IComponent;

    constructor(
        trackPadListenerComponent: IComponent,
        cursorNavigateComponent: IComponent,
        cursorColourChangeComponent:IComponent
    )
    {
        this.trackPadListenerComponent = trackPadListenerComponent;
        this.cursorNavigateComponent = cursorNavigateComponent;
        this.cursorColourChangeComponent = cursorColourChangeComponent;
    }
    init() {
        this.trackPadListenerComponent.init();
        this.cursorNavigateComponent.init();
        this.cursorColourChangeComponent.init();
    }
}