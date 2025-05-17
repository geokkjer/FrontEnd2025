import _ from "lodash";

let dragons = [
  { name: "Fluffy", age: 3, element: "Fire" },
  { name: "Sparky", age: 5, element: "Electric" },
  { name: "Chill", age: 2, element: "Ice" },
  { name: "Stormy", age: 4, element: "Wind" },
  { name: "Rocky", age: 6, element: "Earth" },
  { name: "Shadow", age: 1, element: "Dark" },
  { name: "Sunny", age: 7, element: "Light" },
  { name: "Blaze", age: 8, element: "Fire" },
  { name: "Thunder", age: 9, element: "Electric" },
  { name: "Frost", age: 10, element: "Ice" },
  { name: "Gale", age: 11, element: "Wind" },
  { name: "Boulder", age: 12, element: "Earth" },
  { name: "Night", age: 13, element: "Dark" },
  { name: "Dawn", age: 14, element: "Light" },
  { name: "Ember", age: 15, element: "Fire" },
  { name: "Volt", age: 16, element: "Electric" },
  { name: "Blizzard", age: 17, element: "Ice" },
  { name: "Cyclone", age: 18, element: "Wind" },
  { name: "Granite", age: 19, element: "Earth" },
  { name: "Eclipse", age: 20, element: "Dark" },
];

let hasElement = _.curry((element, obj) => {
  obj.element === element;
});

let fireDragons = dragons.filter((dragon) => dragon.element === "Fire");

console.log(fireDragons, dragons.filter(hasElement("Wind")));
