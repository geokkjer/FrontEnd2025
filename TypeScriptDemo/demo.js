"use strict";
function greet(person) {
    return `Hello, ${person.name}! You are ${person.age} years old!`;
}
const user = { name: "Per", age: 33 };
console.log(greet(user));
