import gulp from 'gulp'
import gulpif from 'gulp-if'
// 启动服务器脚本的功能
import liveserver from 'gulp-live-server'
import args from './util/args'

gulp.task('server',(cb)=>{
    // 如果不是监听状态下
    if(!args.watch) return cb()

    // 创建服务器 指在当前命令行执行该脚本
    var server = liveserver.new(['--harmony','server/bin/www']);
    // 启动服务器
    server.start();

    // js模板有任何改动 告诉服务器 使其做对应处理
    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
        server.notify.apply(server,[file]);
    })
    // 如果服务器脚本文件接口之类的有改动
    // 让服务器重启
    gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
        server.start.bind(server)()
    })
})