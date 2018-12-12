import { IPlayer } from "./IPlayer";
import { ITimerService } from '../../../typeScript/Interfaces/ITimerService';
import { IUpdateService } from "../../../typeScript/Interfaces/IUpdateService";
export interface ICubikComponentModel {
    name: string;
    cubeClass: string;
    scoreId: string;
    targetId: string;
    cubeCount: number;
    player: IPlayer;
    timerService: ITimerService;
    updateService: IUpdateService;
    getCubeCount(): number;
    //populate(id: string, value:number): void;
}