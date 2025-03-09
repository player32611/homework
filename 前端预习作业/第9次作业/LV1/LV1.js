const text = document.getElementById("text")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
function debounce(fn, delay = 200) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}//防抖
function throttle(fn, interval = 1000) {
    let timer = null //定时器
    firstTime = true;//是否为第一次调用
    return function () {
        let args = arguments;
        if (firstTime) {
            fn.apply(fn, args);
            return firstTime = false;
        }
        if (timer) {//如果定时器还在，则说明前一次延迟执行还没有完成
            return false;
        }
        timer = setTimeout(function () {
            timer = null;
            fn.apply(fn, args);
        }, interval)
    }
}
button1.addEventListener("click", debounce(function () {
    text.innerHTML += "防抖"
}))
button2.addEventListener("click", throttle(function () {
    text.innerHTML += "节流"
}))