
const webpack = require('webpack');
const config = require("./config.json");
const webpackUtil = require("./webpackUtil");

module.exports = (() => {

    const application1 = config.applications.filter(app => app.name === "To-Do List (React)")[0];
    const application2 = config.applications.filter(app => app.name === "Azure Functions .NET, Data Structures")[0];
    const application3 = config.applications.filter(app => app.name === "Basic React Email Client")[0];

    const applications = [ application1, application2, application3 ];

    applications.forEach(application => {

        if (application.useWebpack) {

            const directory = webpackUtil.getDirectory(config, application);

            try {

                const webpackConfig = require(`${directory}/webpack.config`);
                const compiler = webpack(webpackConfig);

                compiler.run( (err, stats) => {

                    if (err) {
                        console.error(err);
                    } else {
                        console.log("Building: " + directory);
                    }

                    compiler.close(closeErr => {

                        if (closeErr) {
                            console.error(err);
                        } else {
                            console.log("Finished: " + directory);
                        }

                    });
                });

              } catch (exception) {

                console.error(exception);

              }
        }
    });

    console.log("Test");

})();