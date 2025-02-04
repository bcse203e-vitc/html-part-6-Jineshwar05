function fibonaccirecursive(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const series = fibonaccirecursive(n - 1);
    series.push(series[series.length - 1] + series[series.length - 2]);
    return series;
}
console.log(fibonaccirecursive(7));
