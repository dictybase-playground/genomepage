var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackDevConfig = require("../webpack-dev.config.js");
var webpackDev = require('../webpack.config.js');
var os = require('os');
var gulp = require("gulp");
var gutil = require("gulp-util");
var ghpages = require('gh-pages');
var path = require('path');

var ipAddr = os.networkInterfaces().eth0[0].address;
gulp.task("webpack-dev-server", function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackDevConfig);
	// Start a webpack-dev-server
	new WebpackDevServer(webpack(myConfig), {
        publicPath: myConfig.output.publicPath,
        hot: true
	}).listen(9000, ipAddr, function(err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://" + ipAddr + ":9000/webpack-dev-server/index.html");
	});
});

gulp.task("build", function (callback) {
    var myConfig = Object.create(webpackDev);
    webpack(myConfig,function(err, stats) {
        if(err) throw new gutil.PluginError("webpack-build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors:true
        }));
        callback();
    });
});

gulp.task("deploy", ["build"], function() {
    ghpages.publish(path.join(__dirname,'..', 'build'), function(err) {
        if (err) throw new gutil.PluginError("gh-pages", err);
    });
});


// The development server (the recommended option for development)
gulp.task("default", ["webpack-dev-server"]);
