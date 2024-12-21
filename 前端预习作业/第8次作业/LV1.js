const url = `https://api.openweathermap.org/data/2.5/weather?q=Chongqing&appid=4b3dc1bf9c80f4472ae7a679198ee108&units=metric&lang=zh_cn`

const res = await fetch(url, {
    method: "get",
})
const data = await res.json()
console.log(data.main.temp)
console.log(data.weather[0].description)
