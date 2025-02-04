function ispalindromenumber(number) {
    const reversednumber = reversenumber(number);
    return number === reversednumber;
}
console.log(ispalindromenumber(12321));
console.log(ispalindromenumber(12345));
