import { IComponent } from "../Interfaces/IComponent";
import { INavigateComponentService } from '../Interfaces/INavigateComponentService';
import { INavigateComponentModel } from "../Interfaces/INavigateComponentModel";

export class NavigateComponent<T extends INavigateComponentModel> implements IComponent<T> {
    
    object: T;
    navigateService: INavigateComponentService<T>;

    constructor(
        object: T,
        navigateService: INavigateComponentService<T>
    ){
        this.object = object;
        this.navigateService = navigateService;
    }
    
    init(): void {
        let self = this;
        AFRAME.registerComponent("navigate-component", {
            init: function() {
                self.object.onEvents.forEach(event => {
                    this.el.addEventListener(event, function (e:CustomEvent) {
                        self.object.event = e;
                        self.navigateService.init(self.object);
                    });
                });
            }
        });
    }
}