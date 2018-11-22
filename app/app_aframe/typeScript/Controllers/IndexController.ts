import {IComponent} from "../Interfaces/IComponent";

export class IndexController  {
    
    private trackPadListenerComponent: IComponent;
    private cursorListenerComponent: IComponent;

    constructor(
        trackPadListenerComponent: IComponent,
        cursorListenerComponent: IComponent
    )
    {
        this.trackPadListenerComponent = trackPadListenerComponent;
        this.cursorListenerComponent = cursorListenerComponent;
    }
    init() {
        this.trackPadListenerComponent.init();
        this.cursorListenerComponent.init();
    }
}