{
    // 数据结构的横向对比（增删改查）
    let map = new Map();
    let arr = [];
    // 增
    map.set(['t',1]);
    arr.push({'t':1});
    console.log('map-arr',map,arr);
    
    // 查
    let map_exist = map.has("t");
    let arr_exist = arr.find(item=>item.t);
    console.log(map_exist,":",arr_exist);


    // 改
    map.set('t',2);
    arr.forEach(item=>item.t?item.t=2:'');
    console.log(map)
    console.log('map_build:', map ,'arr_build:', arr );

    // 删
    map.delete = map.delete('t');
    // 删除数组，首先需要找到索引，利用splice删除值
    let index = arr.findIndex(index=>index.t);
    arr.splice(index,1);
    console.log('map_delete:',map,'arr_detele:',arr);
}

{
    // Set与Array的对比
    let set = new Set();
    let array = new Array();

    // 增
    set.add({t:1});
    array.push({t:1});
    console.log("add:",set,array);

    // 查
    let set_exist = set.has({t:1});//false
    let arr_exist = array.find(item=>item.t)
    console.log("exist:",set_exist,arr_exist);

    // 改
    set.forEach(item=>item.t?item.t=2:'')
    array.forEach(item=>item.t?item.t=2:'');
    console.log("build:",set,array);

    // 删
    set.forEach(item=>item.t?set.delete(item):'');
    let index = array.findIndex(item=>item.t);
    array.splice(index,1);
    console.log("delete:",set,array);

}