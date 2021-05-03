"use strict;"

export class XmlHttpRequestUtil {

    static isDone(status = 0, readyState = 0) {
        return status === 200 && readyState === 4;
    };

    static isFail(status = 0, readyState = 0) {
        return status !== 200 && readyState === 4;
    };
}