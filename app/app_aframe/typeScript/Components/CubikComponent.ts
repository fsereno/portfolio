import { IComponent } from "../Interfaces/IComponent";
import { ICubikModel } from "../Interfaces/ICubikModel";
import { ICubikCollectableComponent } from "../Interfaces/ICubikCollectableComponent";
import { ITimerService } from "../../../typeScript/Interfaces/ITimerService";
import { IUpdateService } from "../../../typeScript/Interfaces/IUpdateService";
import { IRandomGeneratorService } from '../../../typeScript/Interfaces/IRandomGeneratorService';
export class CubikComponent<T extends ICubikModel> implements IComponent<T>, ICubikCollectableComponent {
    
    object: T;
    timerService: ITimerService;
    updateService: IUpdateService;
    randomGeneratorService: IRandomGeneratorService;
    
    constructor(
        object: T,
        timerService: ITimerService,
        updateService: IUpdateService,
        randomGeneratorService: IRandomGeneratorService
    ){
        this.object = object;
        this.timerService = timerService;
        this.updateService = updateService;
        this.randomGeneratorService = randomGeneratorService;
    }
    
    init(): void {
        let self = this;

        AFRAME.registerComponent("cubik-component", {
            init:function(){
                self.updateService.update(self.object.scoreId, self.object.player.score);
                self.updateService.update(self.object.targetId, self.object.getCubeCount());
                //self.timerService.Start();
            }
        });

        AFRAME.registerComponent("cubik-collectable-component", {
            init: function () {  
                
                let scene = document.querySelector("#scene"),
                    feedbackTextElement = document.querySelector("#"+self.object.feedbackTextElementId);
                
                this.el.addEventListener('click', function (evt:CustomEvent) {

                    let cube = evt.srcElement;

                    if(cube.classList.contains("start")){
                        self.updateService.update(self.object.scoreId, self.object.player.score);
                        self.updateService.update(self.object.targetId, self.object.getCubeCount());
                        self.timerService.Start();
                    } else {

                        if(!cube.classList.contains("error"))
                            self.object.player.incrementUserScore();
                    
                        if(self.object.getCubeCount() === self.object.player.score){
                            self.timerService.Stop();
                            if(self.timerService.counter > 0){
                                self.updateService.update(self.object.feedbackTextElementId, self.object.successText);
                                feedbackTextElement.setAttribute("visible", "true");
                            } else{
                                feedbackTextElement.setAttribute("visible", "true");
                            }                                             
                        }

                    }
                    
                    
                    
                           
                    cube.setAttribute("visible", "false");
                    
                    if(cube.classList.contains("spawn")){

                        let spwanAmount = self.randomGeneratorService.Generate(20);
                        
                        for(let a = 0; a < spwanAmount; a++) {

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
                                let offSet = self.randomGeneratorService.Generate(15);                
                                newPosition+=offSet+" ";
                            });

                            //Enforce these attributes
                            entity.setAttribute("position", newPosition);
                            entity.classList.remove("error", "spawn", "start");
                            entity.classList.add("reward");
                            entity.setAttribute("color", "green");
                            scene.appendChild(entity);
        
                        }
                                        
                        self.updateService.update(self.object.scoreId, self.object.player.score);
                        self.updateService.update(self.object.targetId, self.object.getCubeCount());
                    }

                    
                });
            }
        });
    }
}