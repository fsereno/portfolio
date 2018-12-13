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