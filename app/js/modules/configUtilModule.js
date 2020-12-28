import Config from  '../../../config.json';

export const ConfigUtilModule = (() => {

    let get = (applicationFolder) => {

        var config = Config;

        if (applicationFolder) {
            let application = Config.applications.filter(x => x.folder.toLowerCase() === applicationFolder.toLowerCase());
            config = application.length > 0 ? application[0] : config;
        }

        return config;
    }

    return {
        get: get
    }
})();