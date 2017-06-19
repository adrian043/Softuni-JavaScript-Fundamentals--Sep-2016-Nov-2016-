// function lettOccInString(input) {
//     let count = 0;
//     let str = input[0];
//     for (let l of input[0]){
//         if (input[1] == l) {
//             count++;
//         }
//     }
//     console.log(count)
// }
function lettOccInString([text, letter]) {
    let count = 0;
    for (let l of text){
        if (letter == l) {
            count++;
        }
    }
    console.log(count)
}
lettOccInString(['pantherrrrr', 'r']);