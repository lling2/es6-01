{
    // promise
    // 通过回调函数解决异步操作问题
    let ajax = function(callback){
        console.log('aaa');
        setTimeout(function(){
            callback&&callback.call();
        },1000);
    }
    ajax(function(){
        console.log('time1')
    })
}
{
    // 利用promise的基本调用
    let ajax = function(callback){
        console.log('执行2');
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve();
            },1000)
        })
    }
    ajax().then(function(){
        console.log('promise','time2');
    })
    // aaa
    //执行2
    // time1
    // promise time2
}

{
    // 利用promise实现多次执行
    let ajax = function(callback){
        console.log('执行3');
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve();
            },1000)
        })
    };
    ajax().then(function(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve();
            },2000)
        })
    }).then(function(){
        console.log('time3');
    })
}

{
    // 利用catch捕获错误
    let  ajax = function(num){
        console.log('执行4');
        return new Promise(function(resolve,reflect){
            if(num>5){
                resolve();
            }else{
                console.log("出错");
            }
        })
    }
    ajax(6).then(function(){
        console.log('log',6)
    }).catch(function(err){
        console.log('catch',err);
    })

    ajax(3).then(function(){
        console.log('log',6)
    }).catch(function(err){
        console.log('catch',err);
    })
}

{
    //Promise.all所有图片加载完再添加到页面
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src = src;
            img.onload = function(){
                resolve(img)
            }
            img.onerror = function(err){
                reject(err)
            }
        })
    }
    
    function ShowImgs(imgs){
        imgs.forEach(function(img){
            document.body.appendChild(img);
        });
    }

    // 这几个promise只要有一个有问题，那么整个实例都不能显示
    Promise.all([
        loadImg('https://source.qunarzz.com/common/hf/logo.png'),
        loadImg('https://source.qunarzz.com/common/hf/logo.png'),
        loadImg('https://source.qunarzz.com/common/hf/logo.png')
    ]).then(ShowImgs);
}    

{
    // Promise race()
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src = src;
            img.onload = function(){
                resolve(img)
            }
            img.onerror = function(err){
                reject(err)
            }
        })
    }
    function ShowImgs(img){
        let p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }
    Promise.race([
        loadImg('https://source.qunarzz.com/common/hf/logo.png'),
        loadImg('https://source.qunarzz.com/common/hf/logo.png'),
        loadImg('https://source.qunarzz.com/common/hf/logo.png')
    ]).then(ShowImgs);
}