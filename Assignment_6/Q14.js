function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerCaseSentence = sentence.toLowerCase();

    for (let char of alphabet) {
        if (!lowerCaseSentence.includes(char)) {
            return "It is not a pangram.";
        }
    }
    return "It is a pangram.";
}

// Example usage:
const input = "The quick brown fox jumps over the lazy dog";
const result = isPangram(input);
console.log(result);  
