let obj1 = new Object();
obj1.name = 'obj1';
obj1.age = '18';
console.log(obj1);

let obj2 = {
    name: 'obj2',
    age: '19'
}
console.log(obj2);

function obj(name, age) {
    this.name = name
    this.age = age
}
const obj3 = new obj('obj3', '20')
console.log(obj3);