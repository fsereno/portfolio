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

            init: function () {
                self.updateService.update(self.object.scoreId, self.object.player.score);
                self.updateService.update(self.object.targetId, self.object.getCubeCount());
                let availableColours = ["green", "red", "blue", "yellow", "purple", "orange"],
                    cubeClickHandler = (e: any) => {
                        let cube = e.srcElement,
                            feedbackTextElement = document.querySelector("#"+self.object.feedbackTextElementId);

                        if(cube.classList.contains("reward")) {
                            cube.setAttribute("visible", "false");
                            self.object.player.incrementUserScore();
                            self.updateService.update(self.object.scoreId, self.object.player.score);
                        }
                        if(self.object.getCubeCount() === self.object.player.score){
                            self.timerService.Stop();
                            if(self.timerService.counter > 0){
                                self.updateService.update(self.object.feedbackTextElementId, self.object.successText);
                                feedbackTextElement.setAttribute("visible", "true");
                            } else {
                                feedbackTextElement.setAttribute("visible", "true");
                            }
                        }
                    }

                this.el.addEventListener('click', function (evt: any) {

                    let scene = document.querySelector("#scene"),
                        cube = evt.srcElement,
                        spawnLimit = Number(cube.getAttributeNode("data-spawn-limit").textContent) || 0,
                        timeValue = Number(cube.getAttributeNode("data-time-value").textContent) || 0,
                        spwanAmount = self.randomGeneratorService.Generate(spawnLimit);

                    if(cube.classList.contains("start")){

                        cube.setAttribute("visible", "false");

                        for(let a = 0; a < spwanAmount; a++) {

                            let entity = document.createElement('a-box'),
                                currentPosition = cube.getAttributeNode("position").textContent,
                                currentPositionArray = currentPosition.split(" "),
                                newPosition = "",
                                colourIndex = self.randomGeneratorService.Generate(availableColours.length) - 1;

                            for(let i = 0; i <cube.attributes.length; i++){
                                entity.setAttribute(cube.attributes[i].nodeName, cube.attributes[i].nodeValue);
                            }

                            currentPositionArray.forEach(() => {
                                let offSet = self.randomGeneratorService.Generate(15);
                                newPosition+=offSet+" ";
                            });

                            entity.setAttribute("position", newPosition);
                            entity.classList.remove("error", "start");
                            entity.classList.add("reward");
                            entity.setAttribute("color", availableColours[colourIndex]);
                            entity.addEventListener("click", (e: CustomEvent)=>{
                                cubeClickHandler(e);
                            });

                            scene.appendChild(entity);
                            self.timerService.duration = self.timerService.duration + timeValue;
                        }

                        self.updateService.update(self.object.scoreId, self.object.player.score);
                        self.updateService.update(self.object.targetId, self.object.getCubeCount());
                        self.timerService.Start();
                    }
                });
            }
        });
    }
}