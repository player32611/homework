const text = `有一天，我在上某实验课的时候感到非常无聊，看着要完成的实验报告发呆n
然后我就想，有没有一种方法可以让我不直接在输入框内复制粘贴输入报告内容完成这份实验报告呢n
于是经过我一段时间的思考，在控制台输入了一段代码，通过一种不一样的方式写我的实验报告（内容是乱写的...)n
请看下面的视频 （视频已加速）：`
const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')

// 方法一
let i = 0
setInterval(function () {
    if (i < text.length) {
        div1.innerHTML += text[i]
        i++
        if (text[i] == 'n') {
            div1.innerHTML += '<br>'
            i++
        }
    }
}, 50)


//方法二
let n = 0
const p = (n) => new Promise(resolve => { setTimeout(() => resolve(n), 50) })
async function foo() {
    while (n < text.length) {
        const word = await p(text[n])
        div2.innerHTML += word
        n++
        if (text[n] == 'n') {
            div2.innerHTML += '<br>'
            n++
        }
    }
}
foo()