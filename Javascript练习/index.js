let text = `有一天，我在上某实验课的时候感到非常无聊，看着要完成的实验报告发呆<br>
然后我就想，有没有一种方法可以让我不直接在输入框内复制粘贴输入报告内容完成这份实验报告呢<br>
于是经过我一段时间的思考，在控制台输入了一段代码，通过一种不一样的方式写我的实验报告（内容是乱写的...)<br>
请看下面的视频 （视频已加速）：`
let n = 0
const p = (n) => new Promise(resolve => { setTimeout(() => resolve(n), 1000) })

async function foo() {
    while (n < text.length) {
        const word = await p(text[n])
        document.write(word)
        n++
    }
}
foo()