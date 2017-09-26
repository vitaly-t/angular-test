'use strict';

const gulp = require('gulp');
const del = require('del');
const concat = require('gulp-concat');
const less = require('gulp-less');
const runSequence = require('gulp-sequence');

gulp.task('clean', () => {
    return del('./www/**/*');
});

gulp.task('copy', () => {
        return gulp.src(['views/**/*', 'fonts/*', 'index.html'], {base: '.'})
            .pipe(gulp.dest('www/'));
    }
);

gulp.task('js', () => {
        return gulp.src([
            'scripts/libs/angular/angular.min.js',
            'scripts/libs/angular/angular-route.min.js',
            'scripts/libs/angular/angular-animate.min.js',
            'scripts/libs/angular/angular-sanitize.min.js',
            'scripts/libs/ui-bootstrap-tpls.min.js',
            'scripts/main.js',
            'scripts/controllers/*.js'
        ])
            .pipe(concat('scripts.js'))
            .pipe(gulp.dest('www/'));
    }
);

gulp.task('css', () => {
        return gulp.src([
            'styles/styles.less'
        ])
            .pipe(less())
            .pipe(gulp.dest('www/'));
    }
);

gulp.task('build', runSequence(['copy', 'js', 'css']));
