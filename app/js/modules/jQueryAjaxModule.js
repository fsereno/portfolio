"use strict;"

export const jQueryAjaxModule = (() => {

    let handleAjax = (request, condition, conditionMetDeligate, requestFailedDeligate, conditionFailedDeligate) => {

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

    return {
        handleAjax: handleAjax
    }
})();