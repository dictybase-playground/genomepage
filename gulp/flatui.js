var del = require('del');
var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');
var request = require('request');
var zlib = require('zlib');
var tar = require('tar');
var gulp = require("gulp");
var gutil = require("gulp-util");

var BOOTSTRAP_VERSION = '3.3.1';
var FLATUI_VERSION = '2.2.2';
var latest_bootstrap_url = ['https://github.com/twbs/bootstrap/archive/', 'v', BOOTSTRAP_VERSION, '.tar.gz'].join('');
var latest_flatui_url = ['https://github.com/designmodo/flat-ui/archive/', FLATUI_VERSION, '.tar.gz'].join('');
var bootstrap_folder = ['bootstrap-', BOOTSTRAP_VERSION].join('');
var flatui_folder = ['Flat-UI-', FLATUI_VERSION].join('');

function getVendorFolder() {
    return path.resolve(__dirname, '..', 'src', 'styles', 'vendor');
}

function renameBootstrapFolder() {
    var vendorFolder = getVendorFolder();
    fs.renameSync(
        path.resolve(vendorFolder,bootstrap_folder),
        path.resolve(vendorFolder, 'bootstrap')
    );
}

function renameFlatUIFolder() {
    var vendorFolder = getVendorFolder();
    fs.renameSync(
        path.resolve(vendorFolder,flatui_folder),
        path.resolve(vendorFolder, 'flatui')
    );
}

function getDownloadStream(url) {
    return request.get(url);
}

gulp.task("clean:vendor", function() {
    var vendorPath = getVendorFolder();
    if (fs.existsSync(vendorPath)) {
        del.sync(vendorPath)
        gutil.log("deleted ", gutil.colors.yellow(vendorPath));
    }
});

gulp.task("create:vendor", ["clean:vendor"], function() {
    var vendorPath = getVendorFolder();
    mkdirp.sync(vendorPath);
    gutil.log(gutil.colors.yellow("created folder ", vendorPath));
});

gulp.task("setup:flatcss", ["create:vendor"], function() {
    var path = getVendorFolder();
    // bootstrap
    var bstream = getDownloadStream(latest_bootstrap_url);
    bstream
    .pipe(zlib.createGunzip())
    .pipe(tar.Extract({path: path}))
    .on('error', function(error) {
        gutil.log(gutil.colors.read(error))
    })
    .on('end', function() {
        gutil.log(gutil.colors.yellow("done download and extracting from ", latest_bootstrap_url));
        renameBootstrapFolder();
        gutil.log(gutil.colors.yellow("done renaming bootstrap folder"));
    });

    // flat-ui
    var fstream = getDownloadStream(latest_flatui_url);
    fstream
    .pipe(zlib.createGunzip())
    .pipe(tar.Extract({path: path}))
    .on('error', function(error) {
        gutil.log(gutil.colors.read(error))
    })
    .on('end', function() {
        gutil.log(gutil.colors.yellow("done download and extracting from ", latest_flatui_url));
        renameFlatUIFolder();
        gutil.log(gutil.colors.yellow("done renaming flat-ui folder"));
    });
});


