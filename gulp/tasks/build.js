
'use strict'
console.log('Starting Gulp build task');
const gulp = require('gulp')

const sequence = require('run-sequence')

const devTasks = ['webpack:dev', 'sass']

const buildTasks = ['webpack:build', 'sass']

if (global.isProduction) {
  gulp.task('build', function () {
    return sequence(buildTasks)
  })
} else {
  gulp.task('build', devTasks)
}



// 你的任务代码
console.log('Gulp build task completed');
