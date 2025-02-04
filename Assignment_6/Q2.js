function findlargestofN(numbers) {
    if (numbers.length === 0) {
        return null; 
    }
    return Math.max(...numbers);
}

const usernumbers = [10, 5, 8, 21, 3];
console.log(findlargestofN(usernumbers));
