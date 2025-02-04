function findMissingNumber(arr) {
    const n = arr.length + 1;
    const totalSum = (n * (n + 1)) / 2;
    const arraySum = arr.reduce((acc, num) => acc + num, 0);
    return totalSum - arraySum;
}
 
const input = [1, 2, 3, 5, 6];
const missingNumber = findMissingNumber(input);
console.log(missingNumber);  
