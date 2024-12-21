const url = `https://api.github.com/user/repos`

const res = await fetch(url, {
    method: 'POST',
    headers: {
        'Authorization': `token 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`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "MyProject"
    })
})
const data = await res.json()
console.log(data)