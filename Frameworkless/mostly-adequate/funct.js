let count = 0;
function increment() {
    if (count !== 4) count =+ 1;
    else count =+2;
    return count;
}

function pureIncrement(count) {
    if (count !== 4) return count += 1;
    else return count + 2;
}

console.log(increment(), pureIncrement(4));
console.log(increment(), pureIncrement(4));
console.log(increment(), pureIncrement(4));
console.log(increment(), pureIncrement(4));
console.log(increment(), pureIncrement(4));
console.log(increment(), pureIncrement(4));