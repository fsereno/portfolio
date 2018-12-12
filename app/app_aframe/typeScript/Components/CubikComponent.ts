import { IComponent } from "../Interfaces/IComponent";
import { ICubikComponentModel } from "../Interfaces/ICubikComponentModel";
export class CubikComponent<T extends ICubikComponentModel> implements IComponent<T> {
    
    object: T;
    
    constructor(
        object: T,
    ){
        this.object = object;
    }
    
    init(): void {
        let self = this;
        AFRAME.registerComponent(self.object.name, {
            init: function() {
                
                let cubes = document.getElementsByClassName("cube");

                self.object.updateService.update(self.object.scoreId, self.object.player.score);
                self.object.updateService.update(self.object.targetId, self.object.getCubeCount());

                for(let i=0; i<cubes.length; i++){

                    cubes[i].setAttribute("id", "cube"+i);

                    cubes[i].addEventListener("click",(e:CustomEvent)=>{
                        
                        let cube = e.srcElement;

                        cube.classList.contains("error") ?  self.object.player.decreaseuUerScore() : self.object.player.incrementUserScore();
                           
                        cube.setAttribute("visible", "false");

                        document.querySelector("#"+cube.getAttribute("id")).emit("collected");
                    });
                }            

                this.el.addEventListener("collected", function (e:CustomEvent) {
                    self.object.updateService.update(self.object.scoreId, self.object.player.score);
                });

                self.object.timerService.Start();
            }
        });
    }
}