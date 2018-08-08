import gulp from 'gulp'
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'
import args from './util/args'

gulp.task('css',()=>{
    // 针对哪些文件 打开他们
    return gulp.src('app/**/*.css')
    // 拷贝到server下
        .pipe(gulp.dest('server/public'))
})