import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

// 创建任务
gulp.task('pages',()=>{
    // 指定打开哪些文件执行任务
    return gulp.src('app/**/*.ejs')
        // 把文件拷贝到server下
        .pipe(gulp.dest('server'))
        // 如果有监听事件 则自动刷新
        .pipe(gulpif(args.watch,livereload()))
})