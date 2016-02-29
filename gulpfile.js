
var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');

function compile(bWatch) {
  var bundler = watchify(browserify('./src/app.jsx', { debug: true, cache: {}, packageCache: {}, fullPaths: true }).transform(babel, {presets: ["es2015", "react"]}));

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('main.js'))
      .pipe(buffer())
      .pipe(gulp.dest('./dist'));

      watch('src/scss/**/*.scss',function(){
        gulp.src('src/scss/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('dist'));
      })
  }

  if (bWatch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }

  rebundle();
}

function bWatch() {
  return compile(true);
};

gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return bWatch(); });

gulp.task('default', ['watch']);
