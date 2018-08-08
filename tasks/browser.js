import gulp from 'gulp';
import gulpif from 'gulp-if';
// 函数集合gutil
import gutil from 'gulp-util';
import args from './util/args';
// 如何让app下的各个文件改变时 自动编译到server下

// 编译完的文件 相当于再次拷贝的文件，那么下次修改文件时 需要清空原文件 然后覆盖他 所以接下来 需要写clean.js文件
gulp.task('browser',(cb)=>{
    if(!args.watch) return cb();
    // js
    gulp.watch('app/**/*.js',['scripts']);
    // css
    gulp.watch('app/**/*.css',['css']);
    // 对于模板文件
    gulp.watch('app/**/*.ejs',['pages']);
})