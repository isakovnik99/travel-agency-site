var gulp= require('gulp');
var usemin= require('gulp-usemin');
var browserSync= require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var del= require('del');
var rev = require('gulp-rev');
var cssnano = require('gulp-cssnano');
var uglify= require('gulp-uglify');

gulp.task('previewDist',function(){
    browserSync.init({
        server:{
            baseDir:"docs"
        }

    });


})

gulp.task('deletedist', function(){
    return del('./docs');
})

gulp.task('optimiseimages' ,['deletedist'], function(){
    return gulp.src(['./app/assets/images/**/*','!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(imagemin({
        progressive:true,
        interlaced: true,
        multipass: true

    }))
    .pipe(gulp.dest('./docs/assets/images'));
});
gulp.task('usemin',['deletedist'],function(){
    return gulp.src('./app/index.html')
    .pipe(usemin({
        css:[function(){
            return rev();

        },
    function(){
        return cssnano();

    }],
        js: [function(){
            return rev();
        }, function(){
            return uglify();
        }]
    }))
    .pipe(gulp.dest('./docs'));

});

gulp.task( 'build' ,['deletedist','optimiseimages', 'usemin'])