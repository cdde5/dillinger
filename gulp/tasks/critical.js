const gulp = require('gulp');

// 使用动态导入替代 require
let critical;
import('critical').then(module => {
    critical = module.default;
});

gulp.task('critical', function (done) {
    // 确保 critical 已经加载
    if (!critical) {
        console.error('Critical module not loaded yet');
        done();
        return;
    }

    return gulp.src('public/*.html')
        .pipe(
            critical.stream({
                base: 'public/',
                inline: true,
                css: ['public/css/style.min.css']
            })
        )
        .pipe(gulp.dest('public'));
});
