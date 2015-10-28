var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server

gulp.task('watch', function() {
  browserSync.reload();
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./src/"
    }
  });

  gulp.watch("src/*.html", ['watch']);
});
