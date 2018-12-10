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
                self.object.populateScoreOutput();
                self.object.populateTargetOutput();
                
                let cubes = document.getElementsByClassName("cube");

                for(let i=0; i<cubes.length; i++){

                    cubes[i].setAttribute("id", "cube"+i);

                    cubes[i].addEventListener("click",(e:CustomEvent)=>{
                        
                        let cube = e.srcElement;

                        cube.classList.contains("error") ?  self.object.decreaseuUerScore() : self.object.incrementUserScore();
                           
                        cube.setAttribute("visible", "false");

                        document.querySelector("#"+cube.getAttribute("id")).emit("collected");
                    });
                }            

                this.el.addEventListener("collected", function (e:CustomEvent) {
                    self.object.populateScoreOutput();
                });
            }
        });
    }
}