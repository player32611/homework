// 16
const insertElement = document.getElementById('insert');
const buttonElement = document.querySelector('button');
function insert() {
    insertElement.innerHTML = `
                <p>Hello world!</p>
                <div style="position: relative; top: 50px; height: 50px; width: 50px; background-color: mediumpurple;"></div>
                <div class="box">Sample Text</div>
            `
    // 这里在insertElement这里添加了三个子元素，insertElement还是存在的
    buttonElement.outerHTML = `<p id="add" onclick="pClick()">Don't click me!</p>`
    // 这里把之前的 <button> 改成了 <p>  button也被删除了
}

function pClick() {
    //  修改刚刚新添加的p元素
    document.querySelector('#add').innerText = "I am just a paragraph"
}
document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // 阻止默认上下文菜单的显示
    // 显示自定义上下文菜单的代码
});
function showContextMenu(x, y) {
    var menu = document.getElementById('context-menu');
    menu.style.left = x + 'px';
    menu.style.top = y + 'px';
    menu.style.display = 'block';
}
document.getElementById('context-menu').addEventListener('click', function (e) {
    e.stopPropagation(); // 阻止事件冒泡
    this.style.display = 'none'; // 隐藏菜单
});
document.addEventListener('click', function () {
    document.getElementById('context-menu').style.display = 'none';
});