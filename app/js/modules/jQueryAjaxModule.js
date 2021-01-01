export const jQueryAjaxModule = (() => {

    let handleAjax = (request, condition, conditionMetDeligate, failDeligate, conditionFailDeligate) => {

        if (condition) {
            if (typeof conditionMetDeligate === "function") {
                conditionMetDeligate();
            }
            $.ajax(request)
                .fail(() => {
                    if (typeof failDeligate === "function") {
                        failDeligate();
                    }
                });
          } else {
            if (typeof conditionFailDeligate === "function") {
                conditionFailDeligate();
            }
        }
    }

    return {
        handleAjax: handleAjax
    }
})();