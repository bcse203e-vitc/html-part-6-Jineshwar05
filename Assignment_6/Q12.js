function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}
 
const input = [1, 2, 2, 3, 4, 4, 5];
const result = removeDuplicates(input);
console.log(result);  
