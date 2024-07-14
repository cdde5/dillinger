'use strict';
console.log('Starting Gulp build task');
const gulp = require('gulp');

const sequence = require('run-sequence');

const devTasks = ['webpack:dev', 'sass'];

const buildTasks = ['webpack:build', 'sass'];

if (global.isProduction) {
  gulp.task('build', function () {
    return sequence(buildTasks);
  });
} else {
  // 修改 else 分支的代码
  gulp.task('build', function() { 
    return sequence(devTasks); 
  });
}

// 你的任务代码
console.log('Gulp build task completed');
