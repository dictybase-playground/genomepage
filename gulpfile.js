var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var os = require('os');


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

// The development server (the recommended option for development)
gulp.task("default", ["webpack-dev-server"]);
