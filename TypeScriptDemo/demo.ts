interface Person {
    name: string;
    age: number;
}

function greet(person: Person){
    return `Hello, ${person.name}! You are ${person.age} years old!`
}

const user: Person = { name: "Per", age: 33 };
console.log(greet(user));