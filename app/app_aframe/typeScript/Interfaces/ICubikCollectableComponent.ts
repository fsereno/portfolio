import { ITimerService } from "../../../typeScript/Interfaces/ITimerService";
import { IUpdateService } from "../../../typeScript/Interfaces/IUpdateService";

export interface ICubikCollectableComponent {
    timerService: ITimerService;
    updateService: IUpdateService;
}