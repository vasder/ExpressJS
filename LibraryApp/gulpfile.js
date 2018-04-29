var gulp = require('gulp');
//var jshint = require('gulp-jshint');
//var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', function(){
    return gulp.src(jsFiles)
});

gulp.task('inject', function(){
    var wiredep = require('wiredep').stream;
    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib'
    }
    
    return gulp.src('./src/views/*.html')
    .pipe(wiredep(options))
    .pipe(gulp.dest('./src/views'));
});

gulp.task('serve', ['style', 'inject'], function(){});