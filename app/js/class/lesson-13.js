{
    // Proxy与Reflect
    let obj = {
        time: '2017-1-1',
        name: 'net'
    }
    let monitor = new Proxy(obj,{
        // 拦截对象属性的读取
        get(target,key){
            return target[key].replace('2017','2018');
        },
        // 拦截对象设置属性
        set(target, key, value){
            if( key == 'name'){
                return target[key] = value;
            }else{
                return target[key];
            }
        },
        // 拦截Key in object操作
        has(target,key){
            if(key==='name'){
                return target[key]
            }else{
                return false;
            }
        },
        // 拦截delete
        deleteProoerty(target, key){
            if(key.indexof('_')>-1){
                delete target[key];
                return true;
            }else{
                return target[key];
            }
        },
        // 拦截Object.keys,Object.getOwnpropertySymbols,Object.getOwnpropertyNames
        ownKeys(target){
            return Object.keys(target).filter(item=>item!='time');
        }
    })
    console.log(monitor.time);
    monitor.name = 'nea';
    console.log(monitor.name);
    // 属性
    console.log('has','ww' in monitor);
    console.log('has','name' in monitor);
    // 删除
    delete monitor._r;
    console.log('delete',monitor);
    // keys
    console.log("ownKeys",Object.keys(monitor))
}