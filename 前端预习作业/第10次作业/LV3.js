const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
    resolvecallbacks = []
    rejectcallbacks = []
    constructor(executor) {
        this.state = PENDING
        this.result = null
        const resolve = (value) => {
            if (this.state === PENDING) {
                this.state = FULFILLED
                this.result = value
                this.resolvecallbacks.forEach(callback => callback(value))
            }
        }
        const reject = (reason) => {
            if (this.state === PENDING) {
                this.state = REJECTED
                this.result = reason
                this.rejectcallbacks.forEach(callback => callback(reason))
            }
        }
        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }
    then(onFulfilled, onRejected) {
        const _this = this
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
        onRejected = typeof onRejected === 'function' ? onRejected : (reason) => { throw reason; };
        let nextPromise = new MyPromise((resolve, reject) => {
            const handleResult = (callback, isFulfilled) => {
                setTimeout(() => {
                    try {
                        const returnValue = callback(_this.result);
                        if (returnValue instanceof MyPromise) {
                            returnValue.then(resolve, reject);
                        } else {
                            resolve(returnValue);
                        }
                    } catch (error) {
                        reject(error);
                    }
                }, 0);
            };
            switch (_this.state) {
                case PENDING:
                    _this.resolvecallbacks.push(() => handleResult(onFulfilled, true));
                    _this.rejectcallbacks.push(() => handleResult(onRejected, false));
                    break;
                case FULFILLED:
                    handleResult(onFulfilled, true);
                    break;
                case REJECTED:
                    handleResult(onRejected, false);
                    break;
            }
        });

        return nextPromise;
    }
    catch(onRejected) {
        return this.then(null, onRejected);
    }
}

new MyPromise((resolve, reject) => {
    console.log('我立即执行')
    setTimeout(() => {
        resolve(100)
    }, 1000)
})
    .then((val) => {
        console.log('成功的值是：' + val)
        val += 10
        return val
    })
    .then((val) => {
        console.log('链式调用输出：' + val)
    })

// new MyPromise((resolve, reject) => {
//     console.log('我立即执行');
//     setTimeout(() => {
//         reject("error");
//     }, 1000);
// })
//     .then((val) => {
//         console.log('成功的值是：' + val);
//         return ++val;
//     })
//     .catch((error) => {
//         console.error('捕获到错误：', error)
//     })