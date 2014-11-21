var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var os = require('os');
var del = require('del');
var path = require('path');
var fs = require('fs');


var ipAddr = os.networkInterfaces().eth0[0].address;
gulp.task("webpack-dev-server", function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	// Start a webpack-dev-server
	new WebpackDevServer(webpack(myConfig), {
        publicPath: myConfig.output.publicPath,
        hot: true
	}).listen(9000, ipAddr, function(err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://" + ipAddr + ":9000/webpack-dev-server/index.html");
	});
});

gulp.task("clean:vendor", function() {
    var vendorPath = path.resolve(__dirname, 'src', 'styles', 'vendor');
    if (fs.lstatSync(vendorPath).isDirectory()) {
        del(vendorPath, function(err) {
            if (err) {
                gutil.PluginError(err);
            }
            else {
                gutil.log("deleted ", vendorPath);
            }
        });
    }
    else {
        gutil.log("path ", vendorPath, " does not exist !!!");
    }
});

// The development server (the recommended option for development)
gulp.task("default", ["webpack-dev-server"]);
