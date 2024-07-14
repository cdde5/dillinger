import gulp from 'gulp';
import csso from 'gulp-csso';
import size from 'gulp-size'; 
import handleErrors from '../util/handleErrors';

gulp.task('cssminify', () => {
  const dest = './public/css';
  return gulp
    .src(['./public/css/app.css', './public/css/export.css']) 
    .on('error', handleErrors)
    .pipe(csso())
    .pipe(gulp.dest(dest))
    .pipe(size());
});
