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
    var rename = function() {
        var vendorFolder = getVendorFolder();
        fs.renameSync(
            path.resolve(vendorFolder,bootstrap_folder),
            path.resolve(vendorFolder, 'bootstrap')
        );
    }
    return rename;
}

function renameFlatUIFolder() {
    var rename = function() {
        var vendorFolder = getVendorFolder();
        fs.renameSync(
            path.resolve(vendorFolder,flatui_folder),
            path.resolve(vendorFolder, 'flatui')
        );
    }
    return rename;
}

function downloadAndExtract(url, path , cb) {
    request
    .get(url)
    .on('error',function(err) {
        gutil.log(gutil.colors.red(err));
    })
    .pipe(zlib.createGunzip())
    .pipe(tar.Extract({path: path}))
    .on('end', function() {
        gutil.log(gutil.colors.yellow("done extracting for ", url));
        cb();
        gutil.log(gutil.colors.yellow("done renaming for extracted ", url));
    });
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

gulp.task("download:css", ["create:vendor"], function() {
    var fnb = renameBootstrapFolder();
    var fnflat = renameFlatUIFolder();
    downloadAndExtract(latest_bootstrap_url, getVendorFolder(), fnb);
    downloadAndExtract(latest_flatui_url, getVendorFolder(), fnflat);
});


gulp.task("setup:flatcss", ["download:css"]);

