import {IComponent} from "../Interfaces/IComponent";

export class CursorColourChangeComponent implements IComponent {
    init(): void {
        AFRAME.registerComponent("cursor-color-change", {
            init: function () {  
                let lastIndex = -1,
                    colours = ['red', 'green', 'blue'];

                this.el.addEventListener('cursor-navigate-navigated', function (evt:CustomEvent) {
                    console.log(evt);
                    lastIndex = (lastIndex + 1) % colours.length;    
                    this.setAttribute('color', colours[lastIndex]);
                });
            }
        });
    }
}