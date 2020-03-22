"use strict;"
import { ITimerService } from '../Interfaces/ITimerService';
import { IUpdateService } from '../Interfaces/IUpdateService';
export class TimerService implements ITimerService {
    duration: number;
    counter: number;
    target: string;
    completionTargetId: string;
    completionMessage: string;
    updateService: IUpdateService;
    interval: NodeJS.Timer;
    constructor(
        target: string,
        completionTargetId: string,
        completionMessage: string,
        updateService: IUpdateService) {
        this.counter = 0;
        this.target = target;
        this.completionTargetId = completionTargetId;
        this.completionMessage = completionMessage;
        this.updateService = updateService;
        this.duration = 0;
    }
    Start(): void {
        let internalCounter = this.duration;
        this.interval = setInterval(() => {
            this.updateService.update(this.target, internalCounter);
            this.counter = internalCounter;
            internalCounter--;
            if (internalCounter < 0) {
                this.Stop();
                this.updateService.update(this.completionTargetId, this.completionMessage);
            };
        }, 1000);
    }
    Stop(): void {
        clearInterval(this.interval);
    }
}