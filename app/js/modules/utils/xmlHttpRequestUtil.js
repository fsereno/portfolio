"use strict;"
export class XMLHttpRequestUtil {

    static isDone(status = 0, readyState = 0) {
        return status === 200 && readyState === 4;
    };

    static isFail(status = 0, readyState = 0) {
        return status !== 200 && readyState === 4;
    };

    static request({ type, request, payload, beforeCallback, doneCallback, failCallback, headers }) {

        if (typeof beforeCallback === "function") {
            beforeCallback();
        }

        const xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = (result) => {

            const data = result.currentTarget;

            if (this.isDone(data.status, data.readyState)) {

                let response;

                try {
                    response = JSON.parse(data.response);
                } catch (error) {
                    response = {};
                }

                if (typeof doneCallback === "function") {
                    doneCallback(response);
                }

            } else if (this.isFail(data.status, data.readyState)) {

                if (typeof failCallback === "function") {
                    failCallback(data);
                }
            }
        }

        xhttp.open(type, request);

        if (headers.length > 0) {
            for(let i = 0; i < headers.length; i++) {
                xhttp.setRequestHeader(headers[i].key, headers[i].value);
            }
        }

        xhttp.setRequestHeader("Content-type", "application/json");

        xhttp.send(payload);
    }
}