var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('sass', function () {
    gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./invisibars/dist/css'))
});
gulp.task('compress', function (cb) {
    pump([
            gulp.src('src/js/*.js'),
            uglify(),
            gulp.dest('invisibars/dist/js')
        ],
        cb
    );
});
gulp.task('compile', ['sass'], function () {
    gulp.watch('./src/scss/*.scss', ['sass']);
    gulp.watch('./src/js/*.js', ['compress']);
})