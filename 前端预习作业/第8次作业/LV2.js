const url = `https://api.github.com/user/repos`

const res = await fetch(url, {
    method: 'POST',
    headers: {
        'Authorization': `token API`,//输了真的API就不知道为什么提交不了了
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "MyProject"
    })
})
const data = await res.json()
console.log(data)