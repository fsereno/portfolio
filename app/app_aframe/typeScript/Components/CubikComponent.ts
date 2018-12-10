import { IComponent } from "../Interfaces/IComponent";
import { ICubikComponentModel } from "../Interfaces/ICubikComponentModel";

export class CubikComponent<T extends ICubikComponentModel> implements IComponent<T> {
    
    object: T;

    constructor(
        object: T
    ){
        this.object = object;
    }
    
    init(): void {
        let self = this;
        AFRAME.registerComponent(self.object.name, {
            init: function() {
                document.querySelector("#"+self.object.scoreId).setAttribute(
                    "text", "value", self.object.userScore
                );
                document.querySelector("#"+self.object.targetId).setAttribute(
                  "text", "value", self.object.getCubeCount()
                );
                this.el.addEventListener("navigate-navigated", function (e:CustomEvent) {
                    document.querySelector("#"+self.object.scoreId).setAttribute(
                        "text", "value", self.object.getScore()
                    );
                });
            }
        });
    }
}