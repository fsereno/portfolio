import { IUpdateService } from "../../../typeScript/Interfaces/IUpdateService";

export class UpdateService implements IUpdateService {
    update(id: string, value:any): void {

        let element = document.querySelector("#"+id);
        element.setAttribute(
            "text", "value", value
        );

        if(element.getAttribute("visible") === false) {
            element.setAttribute(
                "visible", true
            );
        }
    }
}