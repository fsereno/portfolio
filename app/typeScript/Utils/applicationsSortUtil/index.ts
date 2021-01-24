
"use strict;"

import { Application } from '../../Models/Application';

export class ApplicationSortUtil {

    public static Sorter(a: Application, b: Application) {

        if (a.order < b.order) {
            return -1;
        }

        if (a.order > b.order) {
            return 1;
        }

        return 0;
    }
}