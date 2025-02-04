function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}
 
const input = "I love programming in JavaScript";
const longestWord = findLongestWord(input);
console.log(longestWord);  
