function compose(...fns) {
    return function (first) {
        return fns.reduceRight((Sn, fn) => fn(Sn), first);
    }
}
const add10 = (x) => x + 10;
const mul10 = (x) => x * 10;
const add100 = (x) => x + 100;

console.log(compose(add10, mul10, add100)(10))