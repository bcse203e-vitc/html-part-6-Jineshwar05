function decimalToBinary(num) {
    let binary = '';
    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }
    return binary || '0';
}

 
const input = 10;
const binaryOutput = decimalToBinary(input);
console.log(binaryOutput);  
