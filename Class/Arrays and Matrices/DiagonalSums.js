function diagnonalSums(matrixRows) {
    let matrix = matrixRows.map(row => row.split(' ').map(Number));
    let mainSum = 0;
    let secondarySum = 0;
    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length - row - 1]
    }
    console.log(mainSum);
    console.log(secondarySum);
}
/*
diagnonalSums(
    ['20 40',
    '10 60']
);
*/
diagnonalSums(
    [
        '3 5 17',
        '-1 7 14',
        '1 -8 89'
    ]
);
