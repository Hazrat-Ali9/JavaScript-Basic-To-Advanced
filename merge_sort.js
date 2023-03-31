 // Hazrat Ali
// University Of Scholars
function mergeSort(arr) {
    let len = arr.length;
    if (len < 2)
        return arr;
    let mid = Math.floor(len / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);
    //send left and right to the mergeSort to broke it down into pieces
    //then merge those
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    let result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;
    while (l < lLen && r < rLen) {
        if (left[l] < right[r]) {
            result.push(left[l++]);
        }
        else {
            result.push(right[r++]);
        }
    }
    //remaining part needs to be addded to the result
    return result.concat(left.slice(l)).concat(right.slice(r));
}

console.log(mergeSort([7, 5, 2, 4, 3, 9]));
console.log(mergeSort([9, 7, 5, 4, 3, 1]));
console.log(mergeSort([1, 2, 3, 4, 5, 6]));