function findSecondSmallestAndLargest(arr) {
    if (arr.length < 2) {
        return "Array must have at least two elements.";
    }

    let sortedArray = arr.slice().sort((a, b) => a - b);
    let uniqueArray = [...new Set(sortedArray)];

    if (uniqueArray.length < 2) {
        return "Array must have at least two unique elements.";
    }

    return {
        secondSmallest: uniqueArray[1],
        secondLargest: uniqueArray[uniqueArray.length - 2]
    };
}
 
const input = [4, 2, 9, 1, 5, 6];
const result = findSecondSmallestAndLargest(input);
console.log(`Second Smallest: ${result.secondSmallest}`);
console.log(`Second Largest: ${result.secondLargest}`);
