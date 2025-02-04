function countCharacterOccurrences(str) {
    const charCount = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    return charCount;
}
 
const input = "hello";
const result = countCharacterOccurrences(input);
console.log(result); 
