{
    // 横向比较Object与Map&&Set

    let obj = new Object();
    let map = new Map();
    let set = new Set();
    let item = {'t':1};

    // 增
    map.set('t',1);
    set.add(item);
    obj["t"]=1;
    console.log('map-set-obj',map,set,obj)//注意map为{‘t’:1}=>undefined因为它必须为键值对

    // 查
    console.log({
        map:map.has("t"),
        set:set.has(item),
        obj:'t' in obj
    })

    // 改
    map.set("t",2);
    item.t = 2;
    obj["t"]=2;
    console.log('map-set-obj',map,set,obj)

    // 删
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.log('map-set-obj',map,set,obj)
}