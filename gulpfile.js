var gulp = require('gulp');
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function() {
  // place code for your default task here
  
  gulp.src('src/app.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'))
});