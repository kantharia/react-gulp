// gulpfile.js
// ===========
// Developement - `gulp serve`
// Production - `gulp build`
var gulp        = require('gulp');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var reactify    = require('reactify');
var uglify      = require('gulp-uglify');
var buffer      = require('vinyl-buffer');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

// create bundle.js for development
gulp.task('build', function() {
  browserify({
    entries: ['js/app.js'],
    debug:true
  })
  .transform('babelify', {presets: ['es2015', 'react']})
  .bundle()
  .on('error', function(err) {
    console.log('Error:', err);
  })
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('dist'))
  .pipe(reload({ stream:true }));
});

// watch changes and create a bundle.js
gulp.task('watch', function() {
  gulp.watch('js/*', ['build']);
});

// watch files for changes and reload
gulp.task('serve', ['build'], function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(['js/*'], {cwd: './'}, ['build']);
});
