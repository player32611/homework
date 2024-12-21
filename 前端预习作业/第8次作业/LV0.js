const url = `https://api.github.com/users/player32611`


fetch(url, {
    method: "get"
})
const res = await fetch(url)
const data = await res.json()
console.log(data)