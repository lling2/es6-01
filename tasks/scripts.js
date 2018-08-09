import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {log,colors} from 'gulp-util';
import args from './util/args';

// 创建任务
gulp.task('scripts',()=>{
    return gulp.src(['app/js/index.js'])
        // 如果有错误产生 集中处理错误 改变原有的处理方式
        .pipe(plumber({
            errorHandle: function(){

            }
        }))
        // 文件重新名命
        .pipe(named())

        // 利用webpack重新编译js文件
        // 第三个参数 处理错误的情况
        // module: {loaders: [{test: /\.js$/,loader: 'babel-loader'}]}
        .pipe(gulpWebpack({
            module:{
                rules:[{
                    test:/\.js$/,
                    loader:'babel-loader'
                }]
            }
        }),null,(err,stats)=>{
            log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
                chunks:false
            }))
        })

        // 把编译好的文件写入指定的路径 存储
        // 因为服务器需要拿到新的js文件才能跑起来
        .pipe(gulp.dest('server/public/js'))
        // 再次命名 满足开发者熟悉的名字cp.min.js
        .pipe(rename({
            basename:'cp',
            extname: '.min.js'
        }))
        // 压缩js文件 配置如何压缩
        .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
        // 再次将文件存储
        .pipe(gulp.dest('server/public/js'))
        // 监听文件 一旦有变化 则刷新
        .pipe(gulpif(args.watch,livereload()))
})