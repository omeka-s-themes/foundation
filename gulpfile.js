'use strict';

var gulp = require('gulp');

gulp.task('css', function () {
    var sass = require('gulp-sass')(require('sass'));
    var postcss = require('gulp-postcss');
    var autoprefixer = require('autoprefixer');

    var sassPaths = [
      'node_modules/foundation-sites/scss',
      'node_modules/motion-ui/src'
    ];

    return gulp.src('./asset/scss/*.scss')
        .pipe(sass.sync({
            outputStyle: 'compressed',
            includePaths: sassPaths
        }).on('error', sass.logError))
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest('./asset/css'));
});

gulp.task('css:watch', function () {
    gulp.watch('./asset/scss/*.scss', gulp.parallel('css'));
});

gulp.task('default', gulp.series('css:watch'));