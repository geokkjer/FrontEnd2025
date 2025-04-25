const hi = name => `Hi ${name}`;
const greeting = name => hi(name);

console.log(hi("Jonas"))
const  xs = [1,2,3,4,5];
// Pure
console.log(xs.slice(0,3))
console.log(xs.slice(0,3))
console.log(xs.slice(0,3))

// impure
xs.splice(0,3)
console.log(xs)
xs.splice(0,3)
console.log(xs)
xs.splice(0,3)
console.log(xs)


const memoize = (f) => {
    const cache ={};
    return (...args) => {
        const argStr = JSON.stringify(args)
        cache[argStr] = cache[argStr] || f(...args);
        return cache[argStr]
    }
}
const squareNumber = memoize(x => x * x)
console.log(squareNumber(4),squareNumber(4),squareNumber(5),squareNumber(5))
export default {}


