import { IUpdateService } from "./IUpdateService";
export interface ITimerService {
    duration: number;
    target: string;
    updateService: IUpdateService;
    Start(): void;
}