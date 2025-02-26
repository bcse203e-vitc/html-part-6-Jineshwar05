function firstNonRepeatingCharacter(str) {
    const charCount = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

 
const input = "swiss";
const result = firstNonRepeatingCharacter(input);
console.log(result); 
