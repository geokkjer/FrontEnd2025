function outer(){
    let outerVar = "I'm in the outer scope!"
    function inner() {
        console.log(outerVar)
    }
    return inner
}

const closure = outer()
closure()

function counter() {
    let count = 0
    return function () {
        count++
        return count
    }
}

const increment = counter()
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
let counter2 = (function () {
    let count = 0 
    return {
        increment: function () {
            count++
            console.log(count)
        },
        reset: function () {
            count = 0
            console.log("Counter reset")
        },

    }
})();
counter2.increment()
counter2.increment()
counter2.increment()
counter2.increment()
counter2.reset()