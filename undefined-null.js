 // Hazrat Ali
// University Of Scholars
/* 
1. variable value not assigned
2. function but didn't write return 
3. just wrote return but didn't return anything
4. parameter that isn't passed
5. property that doesn't exist in an object
6. accessing array element out of range
7. accessing deleted array element
8. explicitly set value to undefined
*/
let first;
// console.log(first);
function second(x, y) {
    // document.getElementById('sum');
// Undefined Null
}
const result = second(3, 91);
// console.log(result);
function add(a, b) {
    const sum = a + b;

    if (b < 10) {
        return;
    }
    const fun = a * b;
    return sum;
}

const fourth = add(2, 7);
// console.log(fourth)
function double(a, b) {
    const result = a * 2;
    // console.log(b);
    return result;
}
double(81);

const fifth = { name: 'sogir', age: 15, location: 'bandarbon' };
// console.log(fifth.phone);

const sixth = [54, 12, 41, 31];
// console.log(sixth[4])
delete sixth[2];
// console.log(sixth[2]);

const seventh = undefined;
// console.log(seventh);

const myObj = { name: 'samad', profession: null }