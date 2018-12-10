import { IComponent } from "../Interfaces/IComponent";
import { INavigateComponentModel } from '../Interfaces/INavigateComponentModel';
import { ICubikComponentModel } from "../Interfaces/ICubikComponentModel";

export class IndexController  {

    private navigateComponent: IComponent<INavigateComponentModel>;
    private cubikComponent: IComponent<ICubikComponentModel>;

    constructor(
        navigateComponent: IComponent<INavigateComponentModel>,
        cubikComponent: IComponent<ICubikComponentModel>
    )
    {
        this.navigateComponent = navigateComponent;
        this.cubikComponent = cubikComponent;
    }
    init() {
        this.navigateComponent.init();
        this.cubikComponent.init();
    }
}