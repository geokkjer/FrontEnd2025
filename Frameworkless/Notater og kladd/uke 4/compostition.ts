import { compose } from "@mostly-adequate/support"

const add5 = (x: number) => x + 5
const multiplyBy3 = (x: number) => x * 3
const subtract10 = (x: number) => x - 10

const composedFunction = compose(subtract10,multiplyBy3,add5)
const result = composedFunction(7)

console.log(result)