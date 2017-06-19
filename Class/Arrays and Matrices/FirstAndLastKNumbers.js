function firstAndLastKNum(arr) {
    arr = arr.map(Number);
    let woFirst = arr.shift();
    let firstK = arr.slice(0, woFirst);
    let lastK = arr.slice(arr.length - woFirst, woFirst.length);
    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}

firstAndLastKNum(['3',
    '6', '7', '8', '9']);