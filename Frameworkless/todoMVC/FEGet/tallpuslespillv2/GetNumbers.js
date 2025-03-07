
// const createElement = () => ({
//     numbersText: [3, 5, 6, 8, 1, null, 2, 4, 7],
//     count: 0
// })


// const repeat = (elementFactory, number) => {
//     const array = []
//     for (let index = 0; index < number; index++) {
//       array.push(elementFactory())
//     }
//     return array
//   }

// export default () => {
//     const howMany = 9
//     return repeat(createElement, howMany)
// }

const model = {
  numbers: [3, 5, 6, 8, 1, null, 2, 4, 7], // The puzzle numbers
  count: 0 // Move counter
};

export default model;
// export default model = {
//     numbers: [3, 5, 6, 8, 1, null, 2, 4, 7],
//     count: 0
// };