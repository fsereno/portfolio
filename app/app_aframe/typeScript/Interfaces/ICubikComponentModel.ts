import { IPlayerModel } from "./IPlayerModel";
import { ITimerService } from '../../../typeScript/Interfaces/ITimerService';
import { IUpdateService } from "../../../typeScript/Interfaces/IUpdateService";
export interface ICubikComponentModel {
    name: string;
    cubeClass: string;
    scoreId: string;
    targetId: string;
    cubeCount: number;
    player: IPlayerModel;
    timerService: ITimerService;
    updateService: IUpdateService;
    getCubeCount(): number;
}