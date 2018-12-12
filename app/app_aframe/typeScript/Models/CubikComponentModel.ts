import { ICubikComponentModel } from "../Interfaces/ICubikComponentModel"
import { IPlayerModel } from '../Interfaces/IPlayerModel';
import { ITimerService } from '../../../typeScript/Interfaces/ITimerService';
import { IUpdateService } from "../../../typeScript/Interfaces/IUpdateService";
export class CubikComponentModel implements ICubikComponentModel {
        
    name: string;
    cubeClass: string;
    scoreId: string;
    targetId: string;
    cubeCount: number;
    player: IPlayerModel;
    timerService: ITimerService;
    updateService: IUpdateService;

    constructor
    (
        name: string,
        cubeClass: string,
        scoreId: string,
        targetId: string,
        cubeCount: number,
        player: IPlayerModel,
        timerService: ITimerService,
        updateService: IUpdateService
    ){
        this.name = name;
        this.cubeClass = cubeClass;
        this.scoreId = scoreId;
        this.targetId = targetId;
        this.cubeCount = cubeCount;
        this.player = player;
        this.timerService = timerService;
        this.updateService = updateService;
    }
    getCubeCount = (): number => document.querySelectorAll("."+this.cubeClass+".reward").length;
}