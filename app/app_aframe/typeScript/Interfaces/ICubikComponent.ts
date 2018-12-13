import { ITimerService } from "../../../typeScript/Interfaces/ITimerService";
import { IUpdateService } from "../../../typeScript/Interfaces/IUpdateService";

export interface ICubikComponent {
    timerService: ITimerService;
    updateService: IUpdateService;
}