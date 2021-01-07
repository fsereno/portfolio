"use strict;"

import Config from  '../../../../config.json';
export class ConfigUtil {

    static get(applicationFolder) {

        let application = applicationFolder ? Config.applications.filter(x => x.folder.toLowerCase() === applicationFolder.toLowerCase()) : [];
        let result = application.length > 0 ? application[0] : Config

        return result;
    }
}