const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const server = require('browser-sync');

gulp.task('style', () => {
  gulp.src('sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
        browsers: [
          'last 1 version',
          'last 2 Chrome versions',
          'last 2 Firefox versions',
          'last 2 Opera versions',
          'last 2 Edge versions',
        ],
      }),
    ]))
    .pipe(gulp.dest('css'))
    .pipe(server.reload({
      stream: true,
    }));
});

gulp.task('serve', ['style'], () => {
  server.init({
    server: '.',
    notify: false,
    open: true,
    ui: false,
  });

  gulp.watch('sass/**/*.{scss,sass}', ['style']);
  gulp.watch('*.html').on('change', server.reload);
  gulp.watch('js/*.js').on('change', server.reload);
});