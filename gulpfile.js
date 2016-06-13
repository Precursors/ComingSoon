'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var prefix = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

var jsPath = './src/js/*.js';
var cssPath = './src/css/*.scss';
var publicPath = './dist';


gulp.task('js', function() {

  return gulp.src(jsPath)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('main.js'))
    .pipe(gulp.dest(publicPath + '/js'));
});
gulp.task('css', function() {

  return gulp.src(cssPath)
    .pipe(sass())
    .pipe(prefix({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(concat('main.css'))
    .pipe(gulp.dest(publicPath + '/css'));
});

gulp.task('default', ['js', 'css']);

gulp.task('watch', function () {

  gulp.watch(jsPath, ['js']);
  gulp.watch(cssPath, ['css']);
});
