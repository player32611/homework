async function foo() {
    console.log("start");
    await bar();
    console.log("end");
}

async function bar() {
    console.log("bar");
}

console.log(1);

setTimeout(() => {
    console.log("time");
});

foo();

new Promise((resolve) => {
    console.log("p1");
    resolve();
}).then(() => {
    console.log("p2");
});

console.log(2);

//给出代码执行流程分析和结果