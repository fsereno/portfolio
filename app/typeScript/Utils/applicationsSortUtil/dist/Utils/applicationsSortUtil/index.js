"use strict;";
export class ApplicationSortUtil {
    static sorter(a, b) {
        const aOrder = a.order || Number.MAX_VALUE;
        const bOrder = b.order || Number.MAX_VALUE;
        if (aOrder < bOrder) {
            return -1;
        }
        if (aOrder > bOrder) {
            return 1;
        }
        return 0;
    }
}
//# sourceMappingURL=index.js.map