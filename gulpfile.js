var gulp = require('gulp');
var ts = require('gulp-typescript');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var tsFiles = ['*.ts', 'src/**/*.ts'];
var tsConfig = {
    noImplicitAny: false,
    out: 'bundle.js',
    removeComments: true
};

gulp.task('default', ['tsc']);

gulp.task('tsc', function() {
    
    return gulp.src(tsFiles)
        .pipe(ts(tsConfig))
        .pipe(gulp.dest('build'))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('build'));
        
});

