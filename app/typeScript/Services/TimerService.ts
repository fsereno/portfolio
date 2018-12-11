import { ITimerService } from '../Interfaces/ITimerService';

export class TimerService implements ITimerService {
    duration: number;    
    display: string;
    constructor
    (
        duration: number,
        display: string
    )
    {
        this.duration = duration;
        this.display = display;
    }
    Start() {
        throw new Error("Method not implemented.");
    }
}