{
    let l = 1;
    let k = 2;
    // es5
    let es5 = {
        l:1,
        k:k
    }
    let es6 = {
        l,k
    }
    console.log(es5,es6);

    // 对象包含方法？
    let es5_methods = {
        say: function(){
            console.log("say-es5")
        }
    }
    let es6_methods = {
        say(){
            console.log('say-es6')
        }
    }
    console.log(es5_methods.say(),es6_methods.say());
}

{
    // 属性表达式
    let a = 'b';
    let es5_obj = {
        a: 'c',
        b: 'c'
    }
    let es6_obj = {
        [a] : 'c'
    }
    console.log(es5_obj,es6_obj);
}

{
    // 新增API
    console.log('字符串',Object.is('abc','abc'),'aa'==='aa');
    // 因为数组是引用类型
    console.log('数组',Object.is([],[]),[]===[]);
    // 拷贝
    console.log(Object.assign({a:'a',b:'b'}))
    // 遍历对象
    let test = {a:'a',b:'b'};
    for(let [key,value] of Object.entries(test)){
        console.log([key,value]);
    }
}