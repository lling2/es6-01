{
    // 1、set用法
    let list = new Set();
    list.add(9);
    console.log(list.size); 
}
{
    // set默认值
    let arr1 = [1,2,3,3];
    // ps注意new Set()不会进行数据转化 数字2与字符串2是不一样的
    let arr2 = [1,2,'3',3];
    let list1 = new Set(arr1);//因为它的值都是唯一的
    let list2 = new Set(arr2);
    console.log(list1.size);//3
    console.log(list2.size,list2);
}
{
    // 实例方法
    let arr = [1,2,3]
    let list1 = new Set(arr);
    console.log('has',list1.has(1));
    console.log('add',list1.add(4));
    console.log('delete',list1.delete(1),list1);
    list1.clear();
    console.log('clesr',list1)
}
{
    // 遍历方法
    let arr = [11,21,13]
    let list1 = new Set(arr);
    for(let key of list1.keys()){
        console.log(key)
    }
    for(let value of list1.values()){
        console.log(value)
    }
    for(let key of list1){
        console.log(key)
    }
    list1.forEach(function(item){
        console.log(item + 'a')
    })
}

{
    // 2、weakSet()用法
    // 注意：它传入的元素只能是对象，不能是其他类型
    //      它没有clear()、size以及遍历的用法
    let weakSet = new WeakSet();
    let arg = {};
    weakSet.add(arg);
    console.log(weakSet);
}