// 把所有任务关联起来 谁依赖谁都建立好联系 当app文件夹内容改变 然后自动编译
// 注意build.js与default.js的关系

import gulp from 'gulp';
// 处理各个包的顺序问题
import gulpSequence from 'gulp-sequence';
// server文件一定在最后面
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','server']))