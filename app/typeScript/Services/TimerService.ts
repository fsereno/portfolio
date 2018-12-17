import { ITimerService } from '../Interfaces/ITimerService';
import { IUpdateService } from '../Interfaces/IUpdateService';
export class TimerService implements ITimerService {
    duration: number;
    counter: number;
    target: string;
    completionMessage: string;
    updateService: IUpdateService;
    constructor
    (
        duration: number,
        target: string,
        completionMessage: string,
        updateService: IUpdateService
    )
    {
        this.duration = duration;
        this.counter = 0;
        this.target = target;
        this.completionMessage = completionMessage;
        this.updateService = updateService;
    }
    Start(): void  {
        let internalCounter = this.duration,
            interval = setInterval(() => {
                this.updateService.update(this.target,internalCounter);
                this.counter = internalCounter;
                internalCounter--;
                if(internalCounter < 0 ){
                    clearInterval(interval);
                    this.updateService.update(this.target,this.completionMessage);
                };
            }, 1000);
    }
}