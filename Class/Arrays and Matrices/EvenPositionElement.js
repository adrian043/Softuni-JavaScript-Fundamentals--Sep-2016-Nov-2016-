function evenPosElems(arr) {
    let res = [];
    for (let pos in arr)
        if (pos % 2 == 0) {
            res.push(arr[pos])
        }
    console.log(res.join(' '));
}
evenPosElems(['20', '30', '40'])