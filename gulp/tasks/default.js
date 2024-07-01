
'use strict'
// 导入其他任务
require('./build');
require('./critical');
const gulp = require('gulp')

// 定义默认任务
gulp.task('default', gulp.series('build', 'critical', /* 其他任务 */));
