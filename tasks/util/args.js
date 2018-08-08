// 引入的包 是处理命令行参数 帮助我们处理
import yargs from 'yargs';

const args = yargs
    // 以下为增加的选项 
    // 区分线上或者线下环境 
    .option('production',{
        boolean:true,
        default:false,
        describe:'min all scripts'
    })

    //监听
    .option('watch',{
        boolean:true,
        default:false,
        describe:'watch all files'
    })

    .option('verbose',{
        boolean:true,
        default:false,
        describe:'log'
    })

    .option('sourcemaps',{
        describe:'force the creation accemaps'
    })

    .option('port',{
        string:true,
        default:8080,
        describe:'server port'
    })
    
    .argv
    export default args