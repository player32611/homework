const textarea = document.getElementById('textarea')
const comments = document.getElementById('comments')
const menu = document.getElementById('menu')

function submit() {
    if (textarea.value == "") {
        alert('评论不能为空')
    }
    else {
        const div = document.createElement('div')
        div.id = 'commentplace'
        div.innerHTML = `<span id="user"><img src="user.png" alt="user"><span id="username">user</span></span>`
        comments.appendChild(div)
        const span = document.createElement('span')
        span.id = 'comment'
        span.innerHTML = textarea.value
        div.appendChild(span)
        textarea.value = ""
    }
}

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
})

comments.addEventListener('mousemove', function (e) {
    const firstcommentplace = document.querySelector('#commentplace')
    firstcommentplace.addEventListener('contextmenu', function openmenu() {
        const mouseX = e.pageX
        const mouseY = e.pageY
        menu.style.left = mouseX + 'px'
        menu.style.top = mouseY + 'px'
        menu.style.display = 'block'
    })
})

document.addEventListener('click', function () {
    menu.style.display = 'none'
})

function remove() {
    const remove = document.querySelector('#commentplace')
    remove.remove()
}