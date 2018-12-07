import { IComponent } from "../Interfaces/IComponent";
import { INavigateComponentModel } from '../Interfaces/INavigateComponentModel';

export class IndexController  {

    private cursorNavigateComponent: IComponent<INavigateComponentModel>;

    constructor(
        cursorNavigateComponent: IComponent<INavigateComponentModel>,
    )
    {
        this.cursorNavigateComponent = cursorNavigateComponent;
    }
    init() {
        this.cursorNavigateComponent.init();
    }
}