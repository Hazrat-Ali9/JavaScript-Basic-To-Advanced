 // Hazrat Ali
// University Of Scholars
// [0, 1, 1, 2, 3, 5, 8, 13, 21]
// const fibo = [0, 1];
// for (let i = 2; i <= 6; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);

function fibo(i) {
    if (i == 0) {
        return 0;
    }
    if (i == 1) {
        return 1;
    }
    return fibo(i - 1) + fibo(i - 2);
}
console.log(fibo(8));