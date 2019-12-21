/**
 * gulpfile.js
 */

const gulp = require('gulp');
require('@luca.pipolo/gulp-static-starterkit')(gulp);

/**
 * Copy videos.
 */
gulp.task('copy:videos', function() {
  const copy = require('gulp-copy');

  const task = gulp.src('./src/videos/**/*', {
    allowEmpty: true,
  })
      .pipe(copy('./dist', {
        prefix: 1,
      }))
      .pipe(gulp.dest('./dist'));
  return task;
});

/**
 * Extends gulp-static-starterkit build task to copy PHP files.
 */
gulp.task('build', gulp.series(
    'build',
    'copy:videos',
), function(cb) {
  cb;
});

/**
* Extends gulp-static-starterkit default task to use the overridden build task.
*/
gulp.task('default', gulp.series(
    'build'
), function(cb) {
  cb;
});
