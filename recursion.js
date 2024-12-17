 // Hazrat Ali
// University Of Scholars
// 6+5+4+3+2+1

// let sum = 0;
// for (let i = 1; i <= 6; i++) {
//     sum = sum + i;
// }
// console.log(sum);
// let sum = 0;
// for (let i = 6; i >= 1; i--) {
//     sum = sum + i;
// }
// console.log(sum);

// Recurtion
function sum(i) {
    if (i == 1) {
        return 1;
    }
    return i + sum(i - 1);
}

// i + sum(i - 1);
// 6 + 5 + 4 + 3 + 2 + 1

console.log(sum(6));