// function decimalPlaces(num) {
//     var match = (''+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
//     if (!match) { return 0; }
//     return Math.max(
//         0,
//         // Number of digits right of decimal point.
//         (match[1] ? match[1].length : 0)
//         // Adjust for scientific notation.
//         - (match[2] ? +match[2] : 0));
// }
// function rounding([num1, num2]) {
//     [num1, num2] = [num1, num2].map(Number)
//
//     if (num2 < decimalPlaces(num1)) {
//         console.log(num1.toFixed(num2))
//     }
//     else {
//         console.log(parseFloat(num1))
//     }
//
// }

function rounding([num1, num2]) {
    [num1, num2] = [num1, num2].map(Number)
    if (num2 > 15)
        num2 = 15;
    let action = Math.pow(10, num2)

    console.log((Math.round(num1 * action)) / action)
}

rounding([10.51234534, 5])