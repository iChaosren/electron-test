var gulp = require('gulp');
var ts = require('gulp-typescript');
var minifyJS = require('gulp-jsmin');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var optimizeIMG = require('gulp-imagemin');

gulp.task('js', function(){
  return gulp.src('ts/*.ts')
    .pipe(ts())
    .pipe(minifyJS())
    .pipe(gulp.dest('js'))
});

gulp.task('css', function(){
  return gulp.src('less/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('css'))
});

gulp.task('default', [ 'js', 'css']);

gulp.task('img', function() {
    return gulp.src([
        'img/*.jpg',
        'img/*.jpeg',
        'img/*.png',
        'img/*.gif',
        'img/*.svg'])
        .pipe(optimizeIMG())
        .pipe(gulp.dest('img'))
})
