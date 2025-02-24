
// Objec Oriented
// class Flock {
//     constructor(n) {
//         this.seagulls = n;
//     }

//     conjoin(other){
//         this.seagulls += other.seagulls;
//         return this;
//     }

//     breed(other)  {
//         this.seagulls = this.seagulls * other.seagulls;
//         return this
//     }
// }
// const flockA = new Flock(4);
// const flockB = new Flock(2);
// const flockC = new Flock(0);

// const result = flockA
//     .conjoin(flockC)
//     .breed(flockB)
//     .conjoin(flockA.breed(flockB))
//     .seagulls;

// functional 
const add= (flockX, flockY) => flockX + flockY;
const multiply = (flockX, flockY) => flockX * flockY;

const flockA = 4;
const flockB = 2;
const flockC = 0;

const result = add(multiply(flockB, add(flockA, flockC)), multiply(flockA, flockB));
const result2 = multiply(flockB, add(flockA,flockA));
console.log(result, result2);