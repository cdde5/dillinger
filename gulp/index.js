
'use strict';

const gulp = require('gulp');
const fs = require('fs');
const path = require('path');

// 获取 tasks 目录下的所有 .js 文件
const taskFiles = fs.readdirSync(path.join(__dirname, 'tasks'))
  .filter(filename => filename.endsWith('.js'));

// 动态导入所有任务文件
taskFiles.forEach(filename => {
  const taskName = path.basename(filename, '.js');
  const taskModule = require(`./tasks/${filename}`);
  
  // 如果任务模块导出了一个函数，将其注册为 Gulp 任务
  if (typeof taskModule === 'function') {
    gulp.task(taskName, taskModule);
  }
});

// 导出 gulp 对象，以便其他文件可以使用
module.exports = gulp;
