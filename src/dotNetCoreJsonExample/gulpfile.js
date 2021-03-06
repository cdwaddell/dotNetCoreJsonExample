﻿"use strict";

var gulp = require("gulp"),
  mainBowerFiles = require('main-bower-files');

var webroot = "./wwwroot/";
var paths = {
  webroot: webroot,
  bowerfiles: "./bower_components/",
  bowerJsDest: webroot + "Scripts/"
};

gulp.task("bowercopy", function () {
  return gulp.src(
          mainBowerFiles({
            overrides: {
              "knockout-mapping": { "main": "**/knockout.mapping.*js" }
            }
          })
      ).pipe(gulp.dest(paths.bowerJsDest));
});

gulp.task('default', ["bowercopy"]);