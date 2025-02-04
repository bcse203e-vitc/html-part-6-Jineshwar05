function countVowelsAndConsonants(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char.match(/[a-zA-Z]/)) {
            consonantCount++;
        }
    }

    return {
        vowels: vowelCount,
        consonants: consonantCount
    };
}
 
const input = "JavaScript";
const result = countVowelsAndConsonants(input);
console.log(`Vowels: ${result.vowels} (a, a, i)`);
console.log(`Consonants: ${result.consonants}`);
