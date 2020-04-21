
### 1.Promise到底是做什么的
- Promise是异步编程的一种解决方案

### 2.什么时候我们会来处理异步事件
- 常见的场景就是网络请求
- 封装的网络请求函数，因为不能立即拿到结果，所以不能简单的将结果返回
- 所以往往会传入另外的函数，当请求成功，将数据通过传入的函数回调出去
- 当网络请求非常复杂时，就会出现回调地域

### 3.Promise对象有以下两个特点。

（1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

### 4.Promise的实现

``` js
MyPromise.prototype.then = function (onResolve, onReject) {
    const self = this
    onResolve = typeof onResolve === 'function' ? onResolve : (v => v);
    onReject = typeof onReject === 'function' ? onReject : (e => e);
    // console.log(onResolve, onReject);
 
    if (self.state === "fulfilled") {
        return new MyPromise((resolve, reject) => {

            let hasReturn = onResolve(self.value)
            console.log("hasReturn",hasReturn);
            
            
            if (hasReturn instanceof MyPromise) {
                // 返回的是一个Promise,使用传入的Promise
                hasReturn.then(resolve);
            } else {
                // 没有返回值undefined Or (v => v)
                // 传递下一个Promise，保证链式调用
                resolve(hasReturn)
            }
            // console.log(new Promise((resolve, reject) => { }));

        })
    } else if (self.state === "rejected") {
        
        return new MyPromise((resolve, reject) => {

            let hasReturn = onReject(self.value) // self.value
            console.log("hasReturn",hasReturn);
            
            if (hasReturn instanceof MyPromise) {
                // 返回的是一个Promise,使用传入的Promise
                hasReturn.then(resolve);
            } else {
                // 没有返回值undefined Or (e => e)
                // 传递下一个Promise，保证链式调用
                reject(hasReturn)
            }

        })
    }

}
MyPromise.prototype.catch = function (onReject) {
    return this.then(null, onReject)
}

export function MyPromise(executor) {
    this.state = "pending" // fulfilled rejected
    this.value = null
    const _this = this

    executor(resolve, reject)

    function resolve(result) {
        _this.state = "fulfilled"
        _this.value = result
    }
    function reject(error) {
        _this.state = "rejected"
        _this.value = error
    }
}




```