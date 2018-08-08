// 效果是一default.js会自动转变为build.js
import gulp from 'gulp';

// 但是需要先有default任务
gulp.task('default',['build']);