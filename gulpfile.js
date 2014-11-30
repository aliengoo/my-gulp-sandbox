var gulp = require('gulp'),
  concat = require('gulp-concat'),
  watch = require('gulp-watch');

var appSrc = [
  'app/*.module.js',
  'app/*.js',
  'app/**/*.module.js',
  'app/**/*.js',
  'app/**/**/*.js',
];

var vendorSrc = [
  'bower/jquery/dist/jquery.min.js',
  'bower/angular/angular.min.js',
  'bower/angular-resource/angular-resource.min.js',
  'bower/bootstrap/dist/js/bootstrap.min.js',
  'bower/ui-router/release/angular-ui-router.min.js'
];

gulp.task('default', function(){
  gulp.start('buildApp').start('buildVendor').start('appSrcWatch').start('vendorSrcWatch');
});

gulp.task('appSrcWatch', function(){
  watch(appSrc, function(files, cb) {
    gulp.start('buildApp', cb);
  });
});

gulp.task('vendorSrcWatch', function(){
  watch(appSrc, function(files, cb) {
    gulp.start('buildVendor', cb);
  });
});

gulp.task('buildApp', function () {
  gulp.src(appSrc)
    .pipe(watch(appSrc))
    .pipe(concat('app.js', {newLine: ';'}))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('default', function () {
  gulp.src(vendorSrc)
    .pipe(watch(vendorSrc))
    .pipe(concat('vendor.js', {newLine: ';'}))
    .pipe(gulp.dest('./public/js'));
});
