import {IComponent} from "../Interfaces/IComponent";
import { INavigateService } from '../Interfaces/INavigateService';
import { INavigateModel } from "../Interfaces/INavigateModel";

export class CursorNavigateComponent<T extends INavigateModel> implements IComponent<T> {
    
    object: T
    navigateService: INavigateService<T>

    constructor(
        object: T,
        navigateService: INavigateService<T>
        
    ){
        this.object = object;
        this.navigateService = navigateService;
    }
    
    init(): void {

        let self = this;

        AFRAME.registerComponent("cursor-navigate-component", {
            init: function() {
                self.object.onEvents.forEach(event => {
                    this.el.addEventListener(event, function (e:CustomEvent) {
                        self.object.event = e;
                        self.navigateService.init(self.object);
                    });
                })
            }
        });
    }
}