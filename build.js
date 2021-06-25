
const webpack = require('webpack');
const config = require("./config.json");
const webpackUtil = require("./webpackUtil");

module.exports = (() => {

    const application1 = config.applications.filter(app => app.name === "To-Do List (React)")[0];

    const applications = [ application1 ];

    console.log(config.applications)

    applications.forEach(application => {

        console.log(application);

        if (application.useWebpack) {

            const directory = webpackUtil.getDirectory(config, application);

            try {

                const webpackConfig = require(`${directory}/webpack.config`);

                console.log(webpackConfig);

                const compiler = webpack(webpackConfig);

                compiler.run( (err, stats) => { // [Stats Object](#stats-object)
                    
                //    console.log(err)
                  //  console.log(stats)
                  
                    compiler.close((closeErr) => {
                        console.log(closeErr)
                        console.log("close")
                    });
                  
                });
                  

              } catch (exception) {

                console.error(exception);

              }
        }
    });

    console.log("Test");

})();