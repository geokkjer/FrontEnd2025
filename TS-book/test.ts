const addNumbers = (a: number, b: number): number => { 
    return a + b
}
var concatStrings = (a: string, b: string, c:string = "c") => {
    return a + b + c
}

console.log(addNumbers(3, 4), addNumbers(1, 2))
console.log(concatStrings("a","b","c"))
console.log(concatStrings("a","b"))

function testParams(...argArray: number[]) {
    if (argArray.length > 0){
        for (var i = 0; i < argArray.length; i++){
            console.log("argArray " + i + " = " + argArray[i])
            console.log("Argument " + i + " = " + arguments[i])
        }
    }
}
testParams(1)
testParams(1, 2, 3, 4);
// testParams("one", "two");