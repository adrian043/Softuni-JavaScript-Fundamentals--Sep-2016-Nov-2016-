function triangleOfDollars(input) {
    let n = Number(input[0]);

    for (let row = 1; row <= n; row++) {
        let line = '';
        for (let col = 1; col <= row; col++) {
            line += '$';
        }
        console.log(line)
    }
}
triangleOfDollars([5]);
    // for (let row = 1; row <= n; row++) {
    //     console.log(new Array(row + 1).join('$'));
    // }
    //
    // for (let row = 1; row <= n; row++) {
    //     console.log('$'.repeat(row));
    // }

