/*
 * codegrabber-highlightjs
 *
 * Copyright(c) 2014 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@posteo.de>
 *
 */

'use strict';

var gulp = require('gulp');
var plugins = require('bunchitos')('gulp-');
var pkg = require('./package.json');
var paths = {};
var header = '/* \n' +
             ' * ' + pkg.name + ' (v' + pkg.version + ')\n' +
             ' * \n' +
             ' * Copyright(c) 2014 ' + pkg.author.name + ' <' + pkg.author.email + '>\n' +
             ' * ' + pkg.license + ' Licensed \n' +
             ' * \n' +
             ' */\n';

paths.lintable = [
    './lib/**/*.js',
    'gulpfile.js'
];

paths.lib = [
    './lib/index.js',
];

gulp.task('lint', function () {
    return gulp.src(paths.lintable)
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'));
});

gulp.task('concat', function () {
    return gulp.src(paths.lib)
    .pipe(plugins.concat(pkg.name + '.js'))
    .pipe(plugins.header(header))
    .pipe(gulp.dest('./build'));
});

gulp.task('minify', function () {
    return gulp.src(paths.lib)
    .pipe(plugins.concat(pkg.name + '.min.js'))
    .pipe(plugins.uglify({
        preserveComments: 'some'
    }))
    .pipe(plugins.header(header))
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['lint']);
gulp.task('build', ['default', 'concat', 'minify']);