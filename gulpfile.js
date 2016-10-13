'use strict';
 
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');

var paths = {
	sass: './client/assets/sass/*.scss',
    cssToMin: './client/assets/sass/*.css',
    destMinCss: './client/public/css/'
};


gulp.task('sass', function() {
    gulp.src(paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.sass))
});


gulp.task('minify', function() {
    gulp.src(paths.cssToMin)
        .pipe(minify({keepBreaks: true}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.destMinCss))
    ;
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});