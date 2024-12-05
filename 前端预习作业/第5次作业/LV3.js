let obj1 = {
    name: "obj1",
    type: "rectangle",
    size: {
        width: 10,
        height: 5,
    }
};//创建对象obj1
let obj2 = {};//创建对象obj2
obj2 = structuredClone(obj1);//拷贝完整的obj1, 并从堆内存中开辟一个新的区域存放obj2
obj2.size = structuredClone(obj1.size);//深拷贝obj1中的size对象到obj2的size上
obj2.name = "obj2";//将obj2的name属性更改为"obj2"
obj2.size.height = 7;//将obj2中的size对象的height属性更改为7
console.log(obj1);//输出obj1
console.log(obj2);//输出obj2