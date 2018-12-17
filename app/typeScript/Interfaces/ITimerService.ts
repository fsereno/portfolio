import { IUpdateService } from "./IUpdateService";
export interface ITimerService {
    duration: number;
    counter: number;
    target: string;
    completionMessage: string;
    updateService: IUpdateService;
    interval: NodeJS.Timer;
    Start(): void;
    Stop(): void;
}