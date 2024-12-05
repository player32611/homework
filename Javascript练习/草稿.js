let stu = {
    name: "juwenzhang",
    age: 18,
    major: "惠普软件工程学院",
    getThis: function () {
        console.log(this)
    }
};
stu.getThis()

let stu2 = stu;  // 分析变化
stu2.name = "76433";  // 分析变化
console.log(stu.name, stu2.name)
stu.getThis()
stu2.getThis()

let stu3 = {};
Object.assign(stu3, stu)
stu3.name = "水逆信封"  // 分析变化
console.log(stu.name, stu3.name)
stu.getThis()
stu.getThis()
stu3.getThis()