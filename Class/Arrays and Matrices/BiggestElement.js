function biggestElement(input) {
    let matrix = input
        .map(row => row.split(' ')
        .map(Number));
    let biggest = Number.NEGATIVE_INFINITY;
    matrix.forEach(
        r => r.forEach(
            c => biggest = Math.max(biggest, c)));
    console.log(biggest)
}

biggestElement([
    '20 50 10',
    '8 33 145'
]);