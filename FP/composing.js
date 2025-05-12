import { reduce } from "./node_modules/@mostly-adequate/support/index.js";

const compose = (...fns) => (...args) =>
    fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];

const compose2 = (f, g) => (x) => f(g(x));

const toUpperCase = (x) => x.toUpperCase();
const exclaim = (x) => `${x}!`;
const shout = compose(toUpperCase, exclaim);
console.log(shout("send in the clowns"));

const head = (x) => x[0];
const reverse = reduce((acc, x) => [x, ...acc], []);
const last = compose(head, reverse);
console.log(last([1, 2, 3, 4, 5])); // 5
const pipe = (...fns) => (...args) =>
    fns.reduce((res, fn) => [fn.call(null, ...res)], args)[0];
console.log(pipe(
    (x) => x + 1,
    (x) => x * 2,
    (x) => x - 3
)(5)); // 9
