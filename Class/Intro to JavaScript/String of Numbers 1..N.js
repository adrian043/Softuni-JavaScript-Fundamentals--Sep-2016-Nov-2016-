function from1ToN(input) {
    input = Number(input);
    let arr = [];
    for (let i = 1; i <= input; i++) {
        arr.push(i)
    }
    console.log(arr.join(""))
}
// function from1ToN(input) {
//     let str = '';
//     for (let i = 1; i <= input; i++) {
//         str += i;
//     }
//     console.log(str)
// }
from1ToN('11');