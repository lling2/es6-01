{
    // Map用法
    const items = [
        ['name', '张三'],
        ['title', 'Author']
      ];
      
    const map = new Map(items);
      
    //   items.forEach(
    //     ([key, value]) => map.set(key, value)
    //   );
      console.log(map);
      console.log(typeof map);//object
}
{
    // 添加元素 任何类型都可以
    const items = [
        ['name', '张三'],
        ['title', 'Author']
    ];
    const map = new Map(items);
    map.set('a','aaa');
    map.set('s');//没有键值，值为undefined
    console.log(map)
    // 获取元素
    console.log(map.get("a"));
}
{
    // has()方法
    const items1 = [
        ['name', '张三'],
        ['title', 'Author']
    ];
    const map1 = new Map(items1);
    console.log('has'+":"+map1.has("name"));

    // delete()方法
    const items2 = [
        ['name', '张三'],
        ['title', 'Author']
    ];
    const map2 = new Map(items2);
    console.log('delete'+":"+map2.delete("name"));
    console.log(map2);

    // clear()方法
    const items3 = [
        ['name', '张三'],
        ['title', 'Author']
    ];
    const map3 = new Map(items3);
    map3.clear();
    console.log(map3);

    // size属性
    const items4 = [
        ['name', '张三'],
        ['title', 'Author']
    ];
    const map4 = new Map(items4);
    console.log('size'+':'+map4.size);
}

{
    //遍历方法
    // keys()
    const items1 = [
        ['name', '张三'],
        ['title', 'Author']
    ];
    const map1 = new Map(items1);
    for(let key of map1.keys()){
        console.log("key"+':'+key);
    }

    // Values()
    const items2 = [
        ['name', '张三'],
        ['title', 'Author']
    ];
    const map2 = new Map(items2);
    for(let value of map2.values()){
        console.log("value"+':'+value);
    }

    // entries()
    const items3 = [
        ['name', '张三'],
        ['title', 'Author']
    ];
    const map3 = new Map(items2);
    for(let [key,value] of map3.entries()){
        console.log("key"+':'+key+"value"+':'+value);
    }

    // forEach()遍历键值
    const items4 = [
        ['name', '张三'],
        ['title', 'Author']
    ];
    const map4 = new Map(items4);
    map4.forEach(function(item){
        console.log(item);
    })
}

{
    // weakMap用法
    // 只接受对象作为键名，不接受其他形式
    const map = new WeakMap();
    // map.set(1,2);//报错
    map.set(['style',11],11);//['style',11]=>11
    map.set(['style']);//['style']=>undefined
    map.set(['style'],11)//['style']=>11
    console.log(map)
}
{
    // 没有size属性，没有clear()方法、不能遍历
}