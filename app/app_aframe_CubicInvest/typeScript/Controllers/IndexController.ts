import { IComponent } from "../Interfaces/IComponent";
import { INavigateComponentModel } from '../Interfaces/INavigateComponentModel';
import { ICubikModel } from "../Interfaces/ICubikModel";
export class IndexController  {

    private navigateComponent: IComponent<INavigateComponentModel>;
    private cubikComponent: IComponent<ICubikModel>;

    constructor (
        navigateComponent: IComponent<INavigateComponentModel>,
        cubikComponent: IComponent<ICubikModel>
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