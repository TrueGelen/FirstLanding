var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    notify = require('gulp-notify'),
    smartgrid = require('smart-grid'),
    gcmq = require('gulp-group-css-media-queries'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    imagemin = require('gulp-imagemin');

const arrayOfcss = ['./app/css/normalize.css', './app/css/main.css'];
const arrayOfJs = ['./app/js/anim.js'];

gulp.task('concatCss', function () {
    console.log("im in concatcss");
    return gulp.src(arrayOfcss)
        .pipe(concat('styles.css'))
        .pipe(gcmq())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({ level: 2 }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('concatJS', function () {
    console.log("im in concatcss");
    return gulp.src(arrayOfJs)
        .pipe(concat('index.js'))
        .pipe(uglify({ toplevel: true }))
        .pipe(gulp.dest('./dist/js'));
});

/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'sass', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % || rem */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1170px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1100px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '960px'
        },
        sm: {
            width: '780px',
            fields: '15px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '560px',
            fields: '15px'
        }
    }
};

smartgrid('./app/sass', settings);

gulp.task('sass', function () {
    return gulp.src('app/sass/*.+(sass|scss)')
        .pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: './'
        },
        notify: false
    });
});


//Не использую не устраивает сжатие.(лучше тут https://www.iloveimg.com/ru/compress-image)
gulp.task('imageMin', function () {
    gulp.src('app/img/**')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(gulp.dest('dist/img/'))
});

async function removeAll() {
    const deletedPaths = await del(['dist']);
    console.log('Deleted files and directories:\n', deletedPaths.join('\n'));
}

gulp.task('dev', gulp.parallel('sass', 'browser-sync', function () {
    gulp.watch('app/sass/**/*.+(sass|scss)', gulp.parallel('sass'));
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('app/js/*.js').on('change', browserSync.reload);
}));

gulp.task('build', gulp.series(removeAll, 'sass', 'concatCss'));
