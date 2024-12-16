 // Hazrat Ali
// University Of Scholars
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let item = array[i];
        let j = i;

        while (j > 0 && array[j - 1] > item) {
            array[j] = array[j - 1];
            j--;
        }

        array[j] = item;
    }
    return array;
}
// insertion sort
console.log(insertionSort([7,5,2,4,3,9])); 
console.log(insertionSort([9,7,5,4,3,1])); 
console.log(insertionSort([1,2,3,4,5,6]));