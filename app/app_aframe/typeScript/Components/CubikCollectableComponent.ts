import { IComponent } from "../Interfaces/IComponent";
import { ICubikModel } from "../Interfaces/ICubikModel";
import { ICubikCollectableComponent } from "../Interfaces/ICubikCollectableComponent";
import { ITimerService } from "../../../typeScript/Interfaces/ITimerService";
import { IUpdateService } from "../../../typeScript/Interfaces/IUpdateService";
export class CubikCollectableComponent<T extends ICubikModel> implements IComponent<T>, ICubikCollectableComponent {
    
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

        AFRAME.registerComponent("cubik-component", {
            init:function(){
                self.updateService.update(self.object.scoreId, self.object.player.score);
                self.updateService.update(self.object.targetId, self.object.getCubeCount());
                self.timerService.Start();
            }
        });

        AFRAME.registerComponent("cubik-collectable-component", {
            init: function () {  
                
                let scene = document.querySelector("#scene");
                this.el.addEventListener('click', function (evt:CustomEvent) {

                    let cube = evt.srcElement;
                    
                    if(!cube.classList.contains("error"))
                        self.object.player.incrementUserScore();
                           
                    cube.setAttribute("visible", "false");
                    
                    if(cube.classList.contains("spawn")){

                        //there will be an amount to spwan, there could be more than 1...
                        let entity = document.createElement('a-box'),
                            currentPosition = cube.getAttributeNode("position").textContent,
                            currentPositionArray = currentPosition.split(" "),
                            newPosition = "";
                        
                        //Give the same attributes
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
                        entity.classList.remove("error", "spawn");
                        entity.classList.add("reward");
                        entity.setAttribute("color", "green");
                        scene.appendChild(entity);
                        
                        self.updateService.update(self.object.scoreId, self.object.player.score);
                        self.updateService.update(self.object.targetId, self.object.getCubeCount());
                    }

                    self.updateService.update(self.object.scoreId, self.object.player.score);
                    self.updateService.update(self.object.targetId, self.object.getCubeCount());
                });
            }
        });
    }
}