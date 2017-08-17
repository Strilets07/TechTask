var gulp = require('gulp');
var del = require('del');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var nodemon = require('gulp-nodemon');
var path = require('path');
var sass = require('gulp-sass');


/**
 * Build (Webpack)
 */

gulp.task('clean:build', function() {
    del('./public/js/*')
})

gulp.task('build', ['clean:build'], function() {
  return gulp.src('./app/app.js')
    .pipe(webpack(webpackConfig))
    .on('error', function handleError() {
      this.emit('end'); // Recover from errors
    })
    .pipe(gulp.dest('./'));
});

gulp.task('watch:build', function() {
  return gulp.watch('./app/**/*', ['build']);
});

gulp.task('sass', function () {
  return gulp.src('./public/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css/'));
});
gulp.task('sass:watch', function () {
  gulp.watch('./public/sass/*.scss', ['sass']);
});

/**
 * Node Server (Express)
 */

gulp.task('serve:node', function(done) {
  nodemon({
    exec: 'node ./node_modules/babel-cli/bin/babel-node.js ./server.js',
    watch: ['server.js'],
    ext: 'js html'
  });
});


/**
 * Main tasks
 */

gulp.task('serve', ['serve:node']);
gulp.task('watch', ['build', 'watch:build', 'sass:watch']);
gulp.task('default', ['serve', 'sass']);
