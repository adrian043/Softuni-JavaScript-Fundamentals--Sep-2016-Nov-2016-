function negPosNums(arr) {
    arr = arr.map(Number);
    let result = [];
    for (let i of arr) {
        if (i < 0){
            result.unshift(i);
        }
        else {
            result.push(i);
        }
    }
    console.log(result.join('\n'))
}
negPosNums(['7', '-2', '8', '9'])