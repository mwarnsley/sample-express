//Gulp.js configuration

//include gulp and plugins

var gulp = require('gulp'),
    //gulp newer dependency to check and make sure there's a change before copying the files over again
    newer = require('gulp-newer');

//file locations
var dest = '/dist';

//making object variables for html file locations
html = {
    in: source = 'html/index.html',
    out: dest = 'dist/'
};

//making object variables for html file locations
css = {
    in: source = 'css/index.css',
    out: dest = 'dist/'
};

//making object variables for html file locations
js = {
    in: source = 'js/index.js',
    out: dest = 'dist/'
};

//making task to copy the html files
gulp.task('copyhtml', function(){
    return gulp.src(html.in)
        .pipe(newer(html.out))
        .pipe(gulp.dest(html.out));
});

//making a task to copy the css files
gulp.task('copycss', function(){
    return gulp.src(css.in)
        .pipe(newer(css.out))
        .pipe(gulp.dest(css.out));
});

//making a task to copy the js files
gulp.task('copyjs', function(){
    return gulp.src(js.in)
        .pipe(newer(js.out))
        .pipe(gulp.dest(js.out));
});

//default task for gulp
gulp.task('default', function(){

});