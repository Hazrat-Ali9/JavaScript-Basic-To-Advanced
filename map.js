 // Hazrat Ali
// University Of Scholars
const numbers = [4, 6, 8, 10];
const output2 = [];

// function doubleOld(number) {
//     return number * 2;
// }

const doubleIt = number => number * 2;

for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result);
}
// console.log(output2);

// 1. loop through each element
// 2. for each element call the provided function
// 3. result for each element will be stored in an array

// const output = numbers.map(doubleIt);
// const output = numbers.map(number => number * 2);
const output = numbers.map(x => x * 2);
// console.log(output);

const squares = numbers.map(x => x * x);
console.log(squares);