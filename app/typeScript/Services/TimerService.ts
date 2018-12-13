import { ITimerService } from '../Interfaces/ITimerService';
import { IUpdateService } from '../Interfaces/IUpdateService';
export class TimerService implements ITimerService {
    duration: number;
    target: string;
    updateService: IUpdateService;
    constructor
    (
        duration: number,
        target: string,
        updateService: IUpdateService
    )
    {
        this.duration = duration;
        this.target = target;
        this.updateService = updateService;
    }
    Start(): void  {
        let counter = this.duration,
            interval = setInterval(() => {
                this.updateService.update(this.target,counter)
                counter--;
                if(counter < 0 ){
                    clearInterval(interval);
                    console.log('Time is up!');
                };
            }, 1000);
    }
}