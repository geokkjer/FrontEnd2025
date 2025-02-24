// 1
const person = {
    name: "Alice",
    age: 25,
    // country: "Norway",
};

let {name, age, country = "Unknown"} = person;


// 2
const colors = ["red", "green", "blue"];
// let [color1, color2, color3] = colors;
// let [color1,,color3] = colors;
let [color1, ...rest] = colors;
// 3
let a =1;
let b= 2;
[ a, b ] = [ b, a ];

console.log(a,b);
console.log(name, age, country);
console.log(colors, color1, rest)