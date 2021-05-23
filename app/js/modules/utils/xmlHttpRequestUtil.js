"use strict;"
export class XMLHttpRequestUtil {

    static isDone(status = 0, readyState = 0) {
        return status === 200 && readyState === 4;
    };

    static isFail(status = 0, readyState = 0) {
        return status !== 200 && readyState === 4;
    };

    static request({ type, request, payload, headers }) {

        return new Promise((resolve, reject) => {

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

                    resolve({ success: true, data: response });

                } else if (this.isFail(data.status, data.readyState)) {

                    reject({ success: false, data })
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

        });
    }
}