import { IComponent } from "../Interfaces/IComponent";
import { INavigateModel } from '../Interfaces/INavigateModel';

export class IndexController  {

    //private trackPadListenerComponent: IComponent;
    private cursorNavigateComponent: IComponent<INavigateModel>;
    //private cursorColourChangeComponent: IComponent;

    constructor(
        //trackPadListenerComponent: IComponent,
        cursorNavigateComponent: IComponent<INavigateModel>,
        //cursorColourChangeComponent:IComponent
    )
    {
        //this.trackPadListenerComponent = trackPadListenerComponent;
        this.cursorNavigateComponent = cursorNavigateComponent;
        //this.cursorColourChangeComponent = cursorColourChangeComponent;
    }
    init() {
       // this.trackPadListenerComponent.init();
        this.cursorNavigateComponent.init();
       // this.cursorColourChangeComponent.init();
    }
}