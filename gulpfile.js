var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var os = require('os');
var del = require('del');
var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');
var request = require('request');
var zlib = require('zlib');
var tar = require('tar');


var LATEST_BOOTSTRAP_URL = 'https://github.com/twbs/bootstrap/archive/v3.3.1.tar.gz';
var LATEST_FLATUI_URL = 'https://github.com/designmodo/Flat-UI/archive/2.2.2.tar.gz';

function getVendorFolder() {
    return path.resolve(__dirname, 'src', 'styles', 'vendor');
}

function downloadAndExtract(url, path) {
    request
    .get(url)
    .on('error',function(err) {
        gutil.log(gutil.colors.red(err));
    })
    .pipe(zlib.createGunzip())
    .pipe(tar.Extract({path: path}));
}


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
    var vendorPath = getVendorFolder();
    if (fs.lstatSync(vendorPath).isDirectory()) {
        del(vendorPath, function(err) {
            if (err) {
                gutil.PluginError(err);
            }
            else {
                gutil.log("deleted ", gutil.colors.cyan(vendorPath));
            }
        });
    }
    else {
        gutil.log("path ", vendorPath, " does not exist !!!");
    }
});

gulp.task("create:vendor", function() {
    var vendorPath = getVendorFolder();
    mkdirp(vendorPath, function(err) {
        if (err) {
            gutil.log(gutil.colors.red(err));
        }
    });
});

gulp.task("download:bootstrap", function() {
    downloadAndExtract(LATEST_BOOTSTRAP_URL, getVendorFolder());
});


gulp.task("download:flatui", function() {
    downloadAndExtract(LATEST_FLATUI_URL, getVendorFolder());
});

gulp.task("setup:flatcss", ["clean:vendor", "create:vendor", "download:bootstrap", "download:flatui"]);

// The development server (the recommended option for development)
gulp.task("default", ["webpack-dev-server"]);
