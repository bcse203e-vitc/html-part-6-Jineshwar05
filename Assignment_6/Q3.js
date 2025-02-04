function separateevenandodd(numbers) {
    const result = {
        even: [],
        odd: []
    };

    numbers.foreach(num => {
        if (num % 2 === 0) {
            result.even.push(num);
        } else {
            result.odd.push(num);
        }
    });

    return result;
}
const usernumbers = [10, 5, 8, 21, 3, 2];
const separatednumbers = separateevenandodd(usernumbers);
console.log(separatednumbers);
