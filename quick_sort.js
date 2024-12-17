 // Hazrat Ali
// University Of Scholars
function quickSort(arr, left, right) {
    let len = arr.length,
        pivot,
        partitionIndex;

// Quick Sort
    if (left < right) {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);

        //sort left and right
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}
function partition(arr, pivot, left, right) {
    let pivotValue = arr[pivot],
        partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(quickSort([7, 5, 2, 4, 3, 9]));
console.log(quickSort([9, 7, 5, 4, 3, 1]));
console.log(quickSort([1, 2, 3, 4, 5, 6]));