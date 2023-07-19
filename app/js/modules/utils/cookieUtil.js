"use strict;"

/**
 * Utility class for handling cookies.
 */
export class CookieUtil {

    /**
     * Retrieves the value of a cookie by its name.
     * @param {string} name - The name of the cookie.
     * @returns {string|null} The value of the cookie, or null if not found.
     */
    static get(name) {

        const cookies = document.cookie;
        const cookieString = cookies.split('; ');

        for (let i = 0; i < cookieString.length; i++) {
            const cookie = cookieString[i].split('=');
            if (cookie[0] === name) {
                return cookie[1];
            }
        }
        return null;
    }
}