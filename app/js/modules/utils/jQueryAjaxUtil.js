"use strict;"

export class jQueryAjaxUtil {

    static handleAjax(request, condition, conditionMetDeligate, requestFailedDeligate, conditionFailedDeligate) {

        if (condition) {

            if (typeof conditionMetDeligate === "function") {

                conditionMetDeligate();

            }

            $.ajax(request)
                .fail(() => {

                    if (typeof requestFailedDeligate === "function") {

                        requestFailedDeligate();

                    }
                });

        } else {

            if (typeof conditionFailedDeligate === "function") {

                conditionFailedDeligate();

            }

        }
    }
}