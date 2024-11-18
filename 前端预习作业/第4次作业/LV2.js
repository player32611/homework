let arr = [1, [2, [3, 4], 5], 6];
console.log(arr);
function f(arr) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            newarr = newarr.concat(f(arr[i]));
        }
        else {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
console.log(f(arr));