import { IUpdateService } from "../../../typeScript/Interfaces/IUpdateService";

export class UpdateService implements IUpdateService {
    update(id: string, value:any): void {
        document.querySelector("#"+id).setAttribute(
            "text", "value", value
          );
    }
}