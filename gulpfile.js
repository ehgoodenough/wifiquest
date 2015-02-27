var gulp = require("gulp")
var gulp_if = require("gulp-if")
var gulp_util = require("gulp-util")
var gulp_sass = require("gulp-sass")
var gulp_uglify = require("gulp-uglify")
var gulp_connect = require("gulp-connect")
var gulp_minify_css = require("gulp-minify-css")
var gulp_minify_html = require("gulp-minify-html")
var gulp_prefixify_css = require("gulp-autoprefixer")
var gulp_json_transform = require("gulp-json-transform")

var browserify = require("browserify")
var reactify = require("reactify")
var envify = require("envify/custom")
var aliasify = require("aliasify")
var brfs = require("brfs")

var del = require("del")
var yargs = require("yargs")
var chalk = require("chalk")
var vinyl_buffer = require("vinyl-buffer")
var vinyl_source = require("vinyl-source-stream")

gulp.task("scripts", function() {
    browserify("./source/index.js")
        .transform("reactify")
        .transform(envify({
            platform: process.env.platform
        }))
        .transform(aliasify.configure({
            configDir: __dirname,
            aliases: {
                "<source>": "./source",
                "<styles>": "./source/styles",
                "<scripts>": "./source/scripts",
                "<assets>": "./source/assets"
            }
        }))
        .transform("brfs")
        .bundle()
        .pipe(vinyl_source("index.js"))
        .pipe(vinyl_buffer())
        .pipe(gulp_if(yargs.argv.minify, gulp_uglify()))
        .pipe(gulp.dest("./gulps"))
        .pipe(gulp_connect.reload())
})

gulp.task("styles", function() {
    gulp.src("./source/index.scss")
        .pipe(gulp_sass())
        .pipe(gulp_prefixify_css())
        .pipe(gulp_if(yargs.argv.minify, gulp_minify_css()))
        .pipe(gulp.dest("./gulps"))
        .pipe(gulp_connect.reload())
})

gulp.task("markup", function() {
    gulp.src("./source/index.html")
        .pipe(gulp_if(yargs.argv.minify, gulp_minify_html()))
        .pipe(gulp.dest("./gulps"))
        .pipe(gulp_connect.reload())
})

gulp.task("stuffs", function() {
    gulp.src(["./source/**/*", "!./source/**/*.html",
             "!./source/**/*.js", "!./source/**/*.css"],
             {base: "./source"})
        .pipe(gulp.dest("./gulps"))
        .pipe(gulp_connect.reload())
})

gulp.task("configs", function() {
    gulp.src("./package.json")
        .pipe(gulp_json_transform(function(data) {
            delete data["dependencies"]
            delete data["devDependencies"]
            return data
        }, 2))
        .pipe(gulp.dest("./gulps"))
})

gulp.task("default", function() {
    del(["./gulps"], function() {
        gulp.start([
            "scripts",
            "styles",
            "markup", 
            "stuffs",
            "configs"
        ])
    })
})

gulp.task("watch", ["default"], function() {
    gulp_connect.server({
        root: "./gulps",
        livereload: true
    })
    
    gulp.watch("./source/**/*.js", ["scripts"])
    gulp.watch("./source/**/*.scss", ["styles"])
    gulp.watch("./source/index.html", ["markup"])
    gulp.watch(["./source/**/*", "!./source/**/*.html",
        "!./source/**/*.js", "!./source/**/*.css"], ["stuffs"])
    gulp.watch("./package.json", ["configs"])
})
