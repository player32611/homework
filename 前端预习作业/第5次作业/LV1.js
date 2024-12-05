//循环:
let factorial1 = (num) => {
    let s = 1;
    for (let i = 1; i <= num; i++)
        s *= i;
    return s;
}
console.log(factorial1(10));
//递归:
let factorial2 = (num) => {
    if (num == 1 || num == 0)
        return 1;
    return factorial2(num - 1) * num;
}
console.log(factorial2(10));