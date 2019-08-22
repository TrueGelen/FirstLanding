var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	notify = require('gulp-notify'),
	smartgrid = require('smart-grid'),
    gcmq = require('gulp-group-css-media-queries');

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
        /* 
        We can create any quantity of break points.
 
        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};
 
smartgrid('./app/sass', settings);

gulp.task('sass', function() {
	return gulp.src('app/sass/*.+(sass|scss)')
		.pipe(sass({outputStyle: 'expanded'}).on("error", notify.onError()))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('gcmq', function () {
    gulp.src('app/css/main.css')
        .pipe(gcmq())
        .pipe(gulp.dest('app/css'));
});

gulp.task('watch', gulp.parallel('sass', 'browser-sync', function() {
    gulp.watch('app/sass/**/*.+(sass|scss)', gulp.parallel('sass'));
    gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch('app/js/*.js').on('change', browserSync.reload);
}));

// gulp.task('watch', ['sass', 'browser-sync'], function() {
// 	gulp.watch('app/sass/**/*.+(sass|scss)', ['sass']);
// 	gulp.watch('app/*.html', browserSync.reload);
//     gulp.watch('app/js/*.js', browserSync.reload);
// });
 
//нужны для конечной сборки:
//autoprefixer, minImage, minCss
