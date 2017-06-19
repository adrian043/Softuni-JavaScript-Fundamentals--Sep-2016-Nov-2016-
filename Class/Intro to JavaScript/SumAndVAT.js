function sumAndVat(input) {
    input = input.map(Number);
    let sum = 0;
    for (let n of input) {
        sum += n;
    }
    console.log(sum);
    console.log(sum / 5);
    console.log(sum + (sum / 5))
}
sumAndVat(['3.12', '5', '18', '19.24', '1953.2262', '0.001564', '1.1445'])