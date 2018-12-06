import { IComponent } from "../Interfaces/IComponent";
import { INavigateModel } from '../Interfaces/INavigateModel';

export class IndexController  {

    private cursorNavigateComponent: IComponent<INavigateModel>;

    constructor(
        cursorNavigateComponent: IComponent<INavigateModel>,
    )
    {
        this.cursorNavigateComponent = cursorNavigateComponent;
    }
    init() {
        this.cursorNavigateComponent.init();
    }
}