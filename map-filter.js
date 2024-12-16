// Hazrat Ali
// University Of Scholars
const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// function square (element){
//     return element * element;
// }

// const square = element => element * element;
// const square = x => x * x;

// const result =  numbers.map(function(element){
//     return element * element;
// })

// const result = numbers.map(x => x * x);

// console.log(result);
// Map Filter
const bigger = numbers.filter( x => x < 3);

const isThere = numbers.find(x => x > 5);

console.log(isThere);