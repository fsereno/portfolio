"use strict;";
export class TechLabel {
    constructor(id) {
        this.id = id;
        switch (id) {
            case 0:
                this.name = "JavaScript";
                this.class = "warning";
                break;
            case 1:
                this.name = "C#";
                this.class = "info";
                break;
            case 2:
                this.name = "Cloud";
                this.class = "danger";
                break;
        }
    }
}
//# sourceMappingURL=index.js.map