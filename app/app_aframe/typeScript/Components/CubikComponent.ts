import { IComponent } from "../Interfaces/IComponent";
import { ICubikComponentModel } from "../Interfaces/ICubikComponentModel";
import { ICubikComponent } from "../Interfaces/ICubikComponent";
import { ITimerService } from "../../../typeScript/Interfaces/ITimerService";
import { IUpdateService } from "../../../typeScript/Interfaces/IUpdateService";
export class CubikComponent<T extends ICubikComponentModel> implements IComponent<T>, ICubikComponent {
    
    object: T;
    timerService: ITimerService;
    updateService: IUpdateService;
    
    constructor(
        object: T,
        timerService: ITimerService,
        updateService: IUpdateService
    ){
        this.object = object;
        this.timerService = timerService;
        this.updateService = updateService;
    }
    
    init(): void {
        let self = this;
        AFRAME.registerComponent(self.object.name, {
            init: function() {
                
                let cubes = document.getElementsByClassName("cube");

                self.updateService.update(self.object.scoreId, self.object.player.score);
                self.updateService.update(self.object.targetId, self.object.getCubeCount());

                for(let i=0; i<cubes.length; i++){

                    cubes[i].setAttribute("id", "cube"+i);

                    cubes[i].addEventListener("click",(e:CustomEvent)=>{
                        
                        let cube = e.srcElement;

                        cube.classList.contains("error") ?  self.object.player.decreaseuUerScore() : self.object.player.incrementUserScore();
                           
                        cube.setAttribute("visible", "false");

                        document.querySelector("#"+cube.getAttribute("id")).emit("collected");

                        if(cube.classList.contains("spawn")){
                            
                            let entity = document.createElement('a-box'),
                                currentPosition = cube.getAttributeNode("position").textContent,
                                currentPositionArray = currentPosition.split(" "),
                                newPosition = "";

                            for(let i = 0; i <cube.attributes.length; i++){
                                entity.setAttribute(cube.attributes[i].nodeName, cube.attributes[i].nodeValue);
                            }

                            //Set new position
                            currentPositionArray.forEach(position =>{
                                // this will become a random number eventually.
                                let adjustment = Number(position) + 0.1; 
                                newPosition+=adjustment;
                            });

                            //Enforce these attributes
                            entity.setAttribute("position", newPosition);
                            entity.setAttribute("color", "blue");

                            this.el.appendChild(entity);
                        }
                    });
                }            

                this.el.addEventListener("collected", function (e:CustomEvent) {
                    self.updateService.update(self.object.scoreId, self.object.player.score);
                });

                self.timerService.Start();
            }
        });
    }
}