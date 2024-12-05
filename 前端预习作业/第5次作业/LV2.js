let obj1 = {
    name: "obj1",
    type: "rectangle",
    width: 10,
    height: 5,
};//创建对象obj1
let obj2 = {};//创建对象obj2
Object.assign(obj2, obj1);//浅拷贝obj1到obj2上
obj2.name = "obj2";//将obj2的name属性更改为"obj2"
obj2.height = 7;//将obj2的height属性更改为7
console.log(obj1);//输出obj1
console.log(obj2);//输出obj2