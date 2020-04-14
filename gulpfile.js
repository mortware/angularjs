const gulp = require('gulp');
const concat = require('gulp-concat');
const del = require('del');

const scripts = require('./scripts');
const styles = require('./styles');
const templates = require('./templates');

const buildDir = './dist/';

gulp.task('css', () =>
    gulp.src(styles)
    .pipe(concat('style.css'))
    .pipe(gulp.dest(buildDir))
);

gulp.task('js', () =>
    gulp.src(scripts)
    .pipe(concat('script.js'))
    .pipe(gulp.dest(buildDir))
);

gulp.task('html', () =>
    gulp.src(templates)
    .pipe(gulp.dest(buildDir))
);

gulp.task('assets', () => {
    return gulp.src([
            'assets/**/*'
        ])
        .pipe(gulp.dest(buildDir))
});

gulp.task('clean', () => del([buildDir]));

gulp.task('build', gulp.series(['css', 'js', 'html', 'assets']));

gulp.task('default', gulp.series('clean', 'build', function(done) {
    //runSequence('clean', 'build', done);
    gulp.watch(['./src/**/*.css'], gulp.series('css'));
    gulp.watch(['./src/**/*.js'], gulp.series('js'));
    gulp.watch(['./src/**/*.html'], gulp.series('html'));
    gulp.watch(['./assets/**/*.*'], gulp.series('assets'));
    done();
}));