import {IComponent} from "../Interfaces/IComponent";

export class IndexController  {
    
    private trackPadListenerComponent: IComponent;
    private navigateComponent: IComponent;
    private cursorColourChangeComponent: IComponent;

    constructor(
        trackPadListenerComponent: IComponent,
        cursorNavigateComponent: IComponent,
        cursorColourChangeComponent:IComponent
    )
    {
        this.trackPadListenerComponent = trackPadListenerComponent;
        this.navigateComponent = cursorNavigateComponent;
        this.cursorColourChangeComponent = cursorColourChangeComponent;
    }
    init() {
        this.trackPadListenerComponent.init();
        this.navigateComponent.init();
        this.cursorColourChangeComponent.init();
    }
}