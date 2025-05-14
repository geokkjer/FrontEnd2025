interface Person {
    name: string;
    age: number;
}
const people: Person[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];



// eksempel 1 - reduce istedenfor filter - alle som er > 30 år
const demo1 = () => {
    type ReduceOneFunctionType =
        (resultArray: Person[], person: Person,
            currentIndex: number, originalArray: Person[])
            => Person[];

    const isOver30 = (person: Person) => person.age > 30;

    const reduceOneFunction: ReduceOneFunctionType =
        (resultArray, person) => {
            if (isOver30(person)) {
                resultArray.push(person);
            }
            return resultArray;
        };
    const over30 = people.reduce(reduceOneFunction, []);
    console.log(over30); // [{ name: "Charlie", age: 35 }]
};

// eksempel 2 - summere alder
const demo2 = () => {
    type ReduceOneFunctionType =
        (sum: number, person: Person,
            currentIndex: number, originalArray: Person[])
            => number;
    const sumAge: ReduceOneFunctionType =
        (sumAges, person) => sumAges + person.age;
    const sumAges : number = people.reduce(sumAge, 0);
    console.log(sumAges); // 90
};

// eksempel 3 - reduce istedenfor map - lage html
const demo3 = () => {
    type ReduceOneFunctionType =
        (html: string, person: Person,
            currentIndex: number, originalArray: Person[])
            => string;

    const htmlFromPerson: ReduceOneFunctionType =
        (html, person) => html + `<li>${person.name} (${person.age})</li>`;        
    const html = people.reduce(htmlFromPerson, '');
    console.log(html); // [{ name: "Charlie", age: 35 }]
};

export default demo3;