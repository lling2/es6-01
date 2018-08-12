{
    // 基本定义和生成实例
    class Parent{
        constructor(name='muke'){
            this.name = name;
        }
    }
    let v_Parent = new Parent('v');
    console.log("构造函数与实例",v_Parent);
}
{
    // 继承
    class Parent{
        constructor(name='muke'){
            this.name = name;
        }
    }
    class Child extends Parent{

    }
    console.log('继承',new Child());
}

{
    // 继承传递参数
    class Parent{
        constructor(name='muke'){
            this.name = name;
        }
    }
    class Child extends Parent{
        constructor(name='child'){
            super(name);//给父亲传递参数
            this.type = 'child';
        }
    }
    console.log('继承传递参数',new Child());
    console.log('继承传递参数',new Child('hello'));//传递参数会覆盖默认值
}

{
    // getter用法
    class Parent{
        constructor(name='muke'){
            this.name = name;
        }
        get longName(){
            return 'mk:' + this.name;
        }
        set longName(value){
            this.name = value;
        }
    }
    let v = new Parent();
    console.log('getter',v.longName);
    v.longName = 'hello';
    console.log("setter",v.longName)
}

{
    //静态方法
    class Parent{
        constructor(name='muke'){
            this.name = name;
        }
        static tell(){
            console.log("静态方法tell");
        }
    }
    Parent.tell();    
}

{
    // 静态属性
    class Parent{
        constructor(name='muke'){
            this.name = name;
        }
        static tell(){
            console.log("静态方法tell");
        }
    }
    Parent.type = 'aa';
    console.log('静态属性',Parent.type)  
}