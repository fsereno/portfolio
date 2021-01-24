
"use strict;"

import { Application } from '../../Models/Application';

export class ApplicationSortUtil {

    public static sorter(a: Application, b: Application) {

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