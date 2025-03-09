console.log('1');
//定时器1
setTimeout(function () {
    console.log('2');
    //nextTick2
    process.nextTick(function () {
        console.log('3');
    })
    //promise2
    new Promise(function (resolve) {
        console.log('4');
        resolve();
    }).then(function () {
        console.log('5')
    })
})
//nextTick1
process.nextTick(function () {
    console.log('6');
})
//promise1
new Promise(function (resolve) {
    console.log('7');
    resolve();
}).then(function () {
    console.log('8')
})
//定时器2
setTimeout(function () {
    console.log('9');
    //nextTick2
    process.nextTick(function () {
        console.log('10');
    })
    //promise3
    new Promise(function (resolve) {
        console.log('11');
        resolve();
    }).then(function () {
        console.log('12')
    })
})